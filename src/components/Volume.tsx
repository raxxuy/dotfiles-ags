import Widget from "@/components/core/widget";
import WpService from "@/services/wp";
import { Variable } from "astal";

export default function Volume() {
	const { toggleMute, lowerVolume, raiseVolume, speakerVolume, speakerIcon } =
		WpService;

	const speakerVolumeLabel = Variable.derive(
		[speakerVolume],
		(v) => `${Math.round(v * 100)}%`
	);

	const cleanup = () => speakerVolumeLabel.drop();

	const handleScroll = (_: unknown, _dx: number, dy: number) =>
		dy < 0 ? raiseVolume() : lowerVolume();

	return (
		<Widget
			cssClasses={["volume"]}
			widthRequest={80}
			spacing={4}
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
