import { createBaseClasses } from "@/components/core/base/styles";
import { BaseProps } from "@/components/core/base/types";
import { BoxProps } from "astal/gtk4/widget";

export interface BoxComponentProps
	extends BaseProps,
		Omit<BoxProps, "children"> {}

export default function Box({
	children,
	spacing = 0,
	cssClasses,
	inlinePadding,
	...props
}: BoxComponentProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });

	return (
		<box {...props} cssClasses={classes} spacing={spacing}>
			{children}
		</box>
	);
}
