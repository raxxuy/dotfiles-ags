import Widget from "@/components/core/widget";
import { SettingsWindow } from "@/windows/Settings";
import { Variable } from "astal";

export default function Settings() {
	const handler = Variable<boolean>(false);
	const handleClick = () => {
		if (!handler.get()) {
			handler.set(true);
			const onDestroy = () => {
				handler.set(false);
				console.log("onDestroy");
			};
			SettingsWindow({ onDestroy });
		}
	};

	return (
		<Widget
			as="button"
			cssClasses={["settings"]}
			onClicked={handleClick}
		>
			<image iconName="applications-system-symbolic" />
		</Widget>
	);
}
