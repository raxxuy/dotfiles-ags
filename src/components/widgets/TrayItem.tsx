import Widget from "@/components/core/widget";
import { PopoverMenu } from "@/constants/ags";
import AstalTray from "gi://AstalTray";

interface TrayItemProps {
	item: AstalTray.TrayItem;
}

export default function TrayItem({ item }: TrayItemProps) {
	return (
		<Widget as="menubutton"
			cssClasses={["tray-item"]}
			tooltipText={item.title}
			setup={(self: any) =>
				item.actionGroup &&
				self.insert_action_group("dbusmenu", item.actionGroup)
			}
		>
			<image gicon={item.gicon} />
			<PopoverMenu menuModel={item.menuModel} hasArrow={false} />
		</Widget>
	);
}
  