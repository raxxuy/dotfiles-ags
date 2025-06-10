import Notification from "@/components/Notification";
import { RegularWindow } from "@/constants/ags";
import notifdService from "@/services/notifd";
import { timeout, Variable } from "astal";
import { App, Astal, Gdk } from "astal/gtk4";

export function NotificationWindow() {
	const { getNotifications } = notifdService;

	const notifications = Variable(getNotifications());	

	notifdService.on("notified", _ => {
		notifications.set(getNotifications());
	});

	notifdService.on("resolved", _ => {
		notifications.set(getNotifications());
	});


	return (
		<RegularWindow 
			name="notifications" 
			visible 
		>
			<box spacing={10} vertical>
				{notifications().as(notifs => notifs.map((notification) => (
					<Notification notification={notification} />
				)))}
			</box>
		</RegularWindow>
	);
}

export default function NotificationPopup(gdkmonitor: Gdk.Monitor) {
	const { TOP } = Astal.WindowAnchor;

	let currentNotification: any = null;
	let isVisible = false;
	let window: any = null;

	// Handle notifications
	notifdService.on("notified", (id) => {
		if (
			notifdService.isDndEnabled() &&
			notifdService.getNotification(id).urgency != 2 // CRITICAL
		) {
			return;
		}
		showNotification(id);
	});

	notifdService.on("resolved", (id) => {
		notifdService.clearNotification(id);
		hideNotification();
	});

	function showNotification(id: number) {
		currentNotification = notifdService.getNotification(id);
		isVisible = true;
		if (window) {
			window.visible = true;
			window.set_child(
				<box vertical>
					{currentNotification && (
						<Notification notification={currentNotification} />
					)}
					<box vexpand />
				</box>
			);
		}
		timeout(5000, () => {
			hideNotification();
		});
	}

	function hideNotification() {
		currentNotification = null;
		isVisible = false;
		if (window) {
			window.visible = false;
			window.set_child(null);
		}
	}

	return (
		<window
			namespace="notification-popup"
			visible={isVisible}
			gdkmonitor={gdkmonitor}
			application={App}
			anchor={TOP}
			setup={(self) => {
				window = self;
			}}
		>
			<box vertical>
				{currentNotification && (
					<Notification notification={currentNotification} />
				)}
				<box vexpand />
			</box>
		</window>
	);
}
