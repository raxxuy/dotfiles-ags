import { Binding } from "astal";
import { ConstructProps, Gtk } from "astal/gtk4";

export type WidgetType = "box" | "button" | "label" | "centerbox";

export interface BaseWidgetProps
	extends ConstructProps<Gtk.Widget, Gtk.Widget.ConstructorProps> {
	as?: WidgetType;
	children?: any;
	cssClasses?: string[] | Binding<string[]>;
	inlinePadding?: boolean;
	label?: string | Binding<string>;
}

export interface BoxWidgetProps extends BaseWidgetProps {
	as: "box";
	spacing?: number;
}

export interface ButtonWidgetProps extends BaseWidgetProps {
	as: "button";
	label?: string | Binding<string>;
}

export interface LabelWidgetProps extends BaseWidgetProps {
	as: "label";
	label: string | Binding<string>;
}

export type WidgetProps =
	| BaseWidgetProps
	| ButtonWidgetProps
	| LabelWidgetProps
	| BoxWidgetProps;
