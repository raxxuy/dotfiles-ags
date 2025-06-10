import Widget from "@/components/core/widget";
import TrayItem from "@/components/widgets/TrayItem";
import TrayService from "@/services/tray";

export default function Tray() {
	const { items } = TrayService;
	
	return (
		<Widget cssClasses={["tray"]}>
			{items.as((items) => items.map((item) => <TrayItem item={item} />))}
		</Widget>
	);
}
