import Bar from "@/windows/Bar";
import Notifications from "@/windows/Notifications";
import { App } from "astal/gtk4";
import style from "./scss/style.scss";

const windows = [Bar, Notifications];

App.start({
	css: style,
	main() {
		windows.map((window) => App.get_monitors().map(window));
	},
});
