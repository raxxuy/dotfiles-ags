import Widget from "@/components/core/widget";
import { END, START, CENTER, HORIZONTAL, VERTICAL } from "@/constants/ags";
import AstalNotifd from "gi://AstalNotifd";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";
import notifdService from "@/services/notifd";

interface NotificationProps {
	notification: AstalNotifd.Notification;
}

export default function Notification({ notification }: NotificationProps) {
	const handleDismiss = () => {
		notification.dismiss();
		notifdService.clearNotification(notification.id);
	};

	return (
		<Widget cssClasses={["notification"]}>
			<box vertical>
				<box cssClasses={["notification-header"]}>
					{(notification.appIcon || notification.desktopEntry) && (
						<image
							cssClasses={["notification-icon"]}
							visible={!!(notification.appIcon || notification.desktopEntry)}
							iconName={notification.appIcon || notification.desktopEntry}
						/>
					)}
					<label
						cssClasses={["notification-app-name"]}
						halign={START}
						label={notification.appName || "Unknown"}
					/>
					<label
						cssClasses={["notification-time"]}
						hexpand
						halign={END}
						label={notification.time.toLocaleString()}
					/>
					<button 
						cssClasses={["notification-close"]}
						onClicked={handleDismiss}
					>
						<image iconName={"window-close-symbolic"} />
					</button>
				</box>
				<Gtk.Separator visible orientation={HORIZONTAL} />
				<box spacing={10} cssClasses={["notification-content"]}>
					<box hexpand vertical>
						<label
							cssClasses={["notification-summary"]}
							ellipsize={Pango.EllipsizeMode.END}
							maxWidthChars={30}
							halign={START}
							xalign={0}
							label={notification.summary}
						/>
						{notification.body && (
							<label
								cssClasses={["notification-body"]}
								maxWidthChars={30}
								wrap
								halign={START}
								xalign={0}
								label={notification.body}
							/>
						)}
					</box>
				</box>
			</box>
		</Widget>
	);
}
