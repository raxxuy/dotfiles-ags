import Clock from "@/components/Clock";
import Overlay from "@/components/ui/overlay";
import Volume from "@/components/Volume";
import Workspaces from "@/components/Workspaces";
import { EXCLUSIVE, LEFT, RIGHT, TOP } from "@/constants/ags";
import { App, Gdk } from "astal/gtk4";

export default function Bar(gdkmonitor: Gdk.Monitor) {
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
				<Overlay>
					<Clock />
				</Overlay>
				<Overlay border={false} backdrop={false}>
					<Overlay id="volume">
						<Volume />
					</Overlay>
				</Overlay>
			</centerbox>
		</window>
	);
}
