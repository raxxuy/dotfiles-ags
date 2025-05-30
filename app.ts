import { App } from "astal/gtk4";
import Bar from "@/index";
import style from "./scss/style.scss";

App.start({
	css: style,
	main() {
		App.get_monitors().map(Bar);
	},
});
