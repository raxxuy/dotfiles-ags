import Widget from "@/components/core/widget";
import { NotificationWindow } from "@/windows/Notifications";

export default function Notifications() {
	const handleClick = () => {
		NotificationWindow();
	};

	return (
		<Widget
			as="button"
			cssClasses={["notifications"]}
			onClicked={handleClick}
		>
			<image iconName="preferences-system-notifications-symbolic" />
		</Widget>
	);
}
