import { Config } from "@/constants/config";
import { TimeFormatKey, TimeFormatKeys, TimeFormats } from "@/constants/time";
import { GLib, Variable } from "astal";
import ConfigService from "./config";

class TimeService {
	private static instance: TimeService;
	private readonly format: Variable<TimeFormatKey>;
	private readonly config: Config["clock"];

	readonly time: Variable<string>;
	readonly date: Variable<string>;

	private constructor() {
		this.config = ConfigService.getConfig().clock;
		this.format = new Variable<TimeFormatKey>(this.config.format);
		this.time = new Variable("").poll(this.config.updateInterval, () =>
			this.formatTime()
		);
		this.date = new Variable("").poll(this.config.updateInterval, () =>
			this.formatTimeUtc()
		);
	}

	private formatTime(): string {
		const now = GLib.DateTime.new_now_local();
		return now.format(TimeFormats[this.format.get()])!;
	}

	private formatTimeUtc(): string {
		const now = GLib.DateTime.new_now_utc();
		return now.format("%F")!;
	}

	changeFormat = (): void => {
		const currentIndex = TimeFormatKeys.indexOf(this.format.get());
		const newFormat =
			TimeFormatKeys[(currentIndex + 1) % TimeFormatKeys.length];

		this.time.drop();
		this.format.set(newFormat);
		ConfigService.setClockFormat(newFormat);
		this.time.poll(this.config.updateInterval, () => this.formatTime());
	};

	cleanup(): void {
		this.time.drop();
		this.format.drop();
	}

	static getInstance(): TimeService {
		if (!TimeService.instance) {
			TimeService.instance = new TimeService();
		}
		return TimeService.instance;
	}
}

export default TimeService.getInstance();
