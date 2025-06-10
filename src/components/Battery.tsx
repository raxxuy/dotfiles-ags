import Widget from "@/components/core/widget";
import BatteryService from "@/services/battery";
import { Variable } from "astal";

export default function Battery() {
	const { percentage, iconName } = BatteryService;

	const batteryLabel = Variable.derive(
		[percentage],
		(v) => `${Math.round(v * 100)}%`
	);

	const cleanup = () => batteryLabel.drop();

	return (
		<Widget
			cssClasses={["battery"]}
			widthRequest={80}
			spacing={4}
			hexpand
			onDestroy={cleanup}
		>
			<box>
				<image iconName={iconName} />
			</box>
			<box hexpand>
				<label label={batteryLabel()} hexpand />
			</box>
		</Widget>
	);
}
