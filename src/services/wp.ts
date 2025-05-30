import { bind, Binding } from "astal";
import AstalWp from "gi://AstalWp";

export class WpService {
	private static instance: WpService;
	private readonly wp: AstalWp.Wp;
	private readonly speaker: AstalWp.Endpoint;
	private readonly microphone: AstalWp.Endpoint;

	readonly speakerVolume: Binding<number>;
	readonly speakerIcon: Binding<string>;
	readonly microphoneVolume: Binding<number>;
	readonly microphoneIcon: Binding<string>;

	private constructor() {
		this.wp = AstalWp.get_default()!;
		this.speaker = this.wp.defaultSpeaker;
		this.microphone = this.wp.defaultMicrophone;

		this.speakerVolume = bind(this.speaker, "volume");
		this.speakerIcon = bind(this.speaker, "volumeIcon");
		this.microphoneVolume = bind(this.microphone, "volume");
		this.microphoneIcon = bind(this.microphone, "volumeIcon");
	}

	toggleMute = (): void => {
		this.speaker.mute = !this.speaker.mute;
	};

	lowerVolume = (): void => {
		this.speaker.volume = Math.max(0, this.speaker.volume - 0.05);
	};

	raiseVolume = (): void => {
		this.speaker.volume = Math.min(1, this.speaker.volume + 0.05);
	};

	static getInstance(): WpService {
		if (!WpService.instance) {
			WpService.instance = new WpService();
		}
		return WpService.instance;
	}
}

export default WpService.getInstance();
