import Battery from "@/components/Battery";
import Clock from "@/components/Clock";
import Tray from "@/components/Tray";
import Overlay from "@/components/ui/overlay";
import Volume from "@/components/Volume";
import Workspaces from "@/components/Workspaces";
import { EXCLUSIVE, LEFT, RIGHT, TOP } from "@/constants/ags";
import TrayService from "@/services/tray";
import { App, Gdk } from "astal/gtk4";

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
			application={App}
		>
			<centerbox>
				<Overlay id="workspaces">
					<Workspaces />
				</Overlay>
				<Overlay id="clock">
					<Clock />
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
