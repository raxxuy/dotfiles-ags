import Widget from "@/components/ui/widget";
import { Gtk } from "astal/gtk4";
import AstalTray from "gi://AstalTray";

interface TrayItemProps {
	item: AstalTray.TrayItem;
}

export default function TrayItem({ item }: TrayItemProps) {
	return (
		<Widget
			as="menubutton"
			cssClasses={["tray-item"]}
			tooltipText={item.title}
			setup={(self) =>
				item.actionGroup &&
				self.insert_action_group("dbusmenu", item.actionGroup)
			}
		>
			<image gicon={item.gicon} />
			<Gtk.PopoverMenu menuModel={item.menuModel} hasArrow={false} />
		</Widget>
	);
}
