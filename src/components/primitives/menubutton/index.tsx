import { createBaseClasses } from "@/components/core/base/styles";
import { BaseProps } from "@/components/core/base/types";
import { MenuButtonProps } from "astal/gtk4/widget";

export interface MenuButtonComponentProps extends BaseProps, MenuButtonProps {}

export default function MenuButton({
	children,
	label,
	cssClasses,
	inlinePadding,
	...props
}: MenuButtonComponentProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });

	return (
		<menubutton {...props} cssClasses={classes}>
			{label || children}
		</menubutton>
	);
}
