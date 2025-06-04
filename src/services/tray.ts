import { bind, Binding, Variable } from "astal";
import AstalTray from "gi://AstalTray";

class TrayService {
	private static instance: TrayService;
	private readonly tray: AstalTray.Tray;
	readonly items: Binding<AstalTray.TrayItem[]>;

	private constructor() {
		this.tray = AstalTray.get_default();
		this.items = bind(this.tray, "items");
	}

	hasItems = (): Variable<boolean> =>
		Variable.derive([this.items], (items) => items.length > 0);

	static getInstance(): TrayService {
		if (!TrayService.instance) {
			TrayService.instance = new TrayService();
		}
		return TrayService.instance;
	}
}

export default TrayService.getInstance();
