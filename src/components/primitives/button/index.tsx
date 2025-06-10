import { createBaseClasses } from "@/components/core/base/styles";
import { BaseProps } from "@/components/core/base/types";
import { ButtonProps } from "astal/gtk4/widget";

export interface ButtonComponentProps extends BaseProps, ButtonProps {}

export default function Button({
	children,
	label,
	cssClasses,
	inlinePadding,
	...props
}: ButtonComponentProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });

	return (
		<button {...props} cssClasses={classes}>
			{label || children}
		</button>
	);
}
