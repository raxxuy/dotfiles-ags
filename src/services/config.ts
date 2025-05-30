import { Config, defaultConfig } from "@/constants/config";
import { readFile, Variable, writeFile } from "astal";

class ConfigService {
	private static instance: ConfigService;
	readonly config: Variable<Config>;

	private constructor() {
		this.config = new Variable<Config>(defaultConfig);

		try {
			const config = JSON.parse(readFile("src/settings.conf"));
			this.config.set(config);
		} catch (error) {
			console.error("Failed to load config:", error);
		}
	}

	setClockFormat(format: Config["clock"]["format"]): void {
		this.config.set({
			...this.config.get(),
			clock: {
				...this.config.get().clock,
				format,
			},
		});
		this.saveConfig();
	}

	getConfig(): Config {
		return this.config.get();
	}

	private saveConfig(): void {
		try {
			writeFile(
				"src/settings.conf",
				JSON.stringify(this.config.get(), null, 2)
			);
		} catch (error) {
			console.error("Failed to save config:", error);
		}
	}

	static getInstance(): ConfigService {
		if (!ConfigService.instance) {
			ConfigService.instance = new ConfigService();
		}
		return ConfigService.instance;
	}
}

export default ConfigService.getInstance();
