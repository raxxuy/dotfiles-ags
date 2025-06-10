import Battery from "@/components/Battery";
import Clock from "@/components/Clock";
import Tray from "@/components/Tray";
import Overlay from "@/components/composite/overlay";
import Volume from "@/components/Volume";
import Workspaces from "@/components/Workspaces";
import { EXCLUSIVE, LEFT, RegularWindow, RIGHT, TOP } from "@/constants/ags";
import TrayService from "@/services/tray";
import { App, Gdk } from "astal/gtk4";
import Settings from "@/components/Settings";
import Notifications from "@/components/Notifications";

export default function Bar(gdkmonitor: Gdk.Monitor) {
	const { hasItems } = TrayService;
	const items = hasItems();
	const cleanup = () => items.drop();

	return (
		<window
			visible
			name="bar"
			cssClasses={["bar"]}
			gdkmonitor={gdkmonitor}
			exclusivity={EXCLUSIVE}
			anchor={TOP | LEFT | RIGHT}
		>
			<centerbox>
				<Overlay id="workspaces">
					<Workspaces />
				</Overlay>
				<Overlay border={false} backdrop={false}>
					<Overlay id="settings">
						<Settings />
					</Overlay>
					<Overlay id="clock">
						<Clock />
					</Overlay>
					<Overlay id="notifications">
						<Notifications />
					</Overlay>
				</Overlay>
				<Overlay border={false} backdrop={false}>
					<Overlay id="volume">
						<Volume />
					</Overlay>
					<Overlay id="battery">
						<Battery />
					</Overlay>
					<Overlay id="tray" visible={items()} onDestroy={cleanup}>
						<Tray />
					</Overlay>
				</Overlay>
			</centerbox>
		</window>
	);
}