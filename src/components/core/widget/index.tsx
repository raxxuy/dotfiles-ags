import { createBaseClasses } from "@/components/core/base/styles";
import Box from "@/components/primitives/box";
import Button from "@/components/primitives/button";
import CenterBox from "@/components/primitives/centerbox";
import Label from "@/components/primitives/label";
import MenuButton from "@/components/primitives/menubutton";
import { WidgetProps, WidgetType } from "./types";

const WIDGET_COMPONENTS: Record<WidgetType, (props: any) => JSX.Element> = {
	button: Button,
	menubutton: MenuButton,
	label: Label,
	centerbox: CenterBox,
	box: Box,
};

export default function Widget({
	as = "box",
	cssClasses,
	inlinePadding = false,
	children,
	...props
}: WidgetProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });
	const Component = WIDGET_COMPONENTS[as];

	return (
		<Component {...props} cssClasses={classes}>
			{children}
		</Component>
	);
}
