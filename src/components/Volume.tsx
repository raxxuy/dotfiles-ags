import Widget from "@/components/ui/widget";
import WpService from "@/services/wp";
import { Variable } from "astal";

export default function Volume() {
	const { toggleMute, lowerVolume, raiseVolume, speakerVolume, speakerIcon } =
		WpService;

	const speakerVolumeLabel = Variable.derive(
		[speakerVolume],
		(v) => `${Math.round(v * 100)}%`
	);

	const cleanup = () => {
		speakerVolumeLabel.drop();
	};

	const handleScroll = (_: unknown, _dx: number, dy: number) => {
		if (dy < 0) raiseVolume();
		else lowerVolume();
	};

	return (
		<Widget
			cssClasses={["volume"]}
			widthRequest={80}
			spacing={6}
			hexpand
			onDestroy={cleanup}
		>
			<box>
				<image iconName={speakerIcon} onButtonPressed={toggleMute} />
			</box>
			<box hexpand>
				<label label={speakerVolumeLabel()} hexpand onScroll={handleScroll} />
			</box>
		</Widget>
	);
}
