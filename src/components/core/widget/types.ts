import { BoxComponentProps } from "@/components/primitives/box";
import { ButtonComponentProps } from "@/components/primitives/button";
import { CenterBoxComponentProps } from "@/components/primitives/centerbox";
import { LabelComponentProps } from "@/components/primitives/label";
import { MenuButtonComponentProps } from "@/components/primitives/menubutton";
import { Binding } from "astal";

export type WidgetType = "box" | "button" | "label" | "centerbox" | "menubutton";

export type WidgetComponentProps = {
	box: BoxComponentProps;
	button: ButtonComponentProps;
	label: LabelComponentProps;
	centerbox: CenterBoxComponentProps;
	menubutton: MenuButtonComponentProps;
};

export type WidgetProps = {
	as?: WidgetType;
	cssClasses?: string[] | Binding<string[]>;
	inlinePadding?: boolean;
	children?: any;
	spacing?: number;
} & Omit<WidgetComponentProps[keyof WidgetComponentProps], "as">;