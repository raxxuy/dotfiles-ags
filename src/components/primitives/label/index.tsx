import { createBaseClasses } from "@/components/core/base/styles";
import { BaseProps } from "@/components/core/base/types";
import { LabelProps } from "astal/gtk4/widget";

export interface LabelComponentProps extends BaseProps, LabelProps {}

export default function Label({
	children,
	label,
	cssClasses,
	inlinePadding,
	...props
}: LabelComponentProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });

	return (
		<label {...props} cssClasses={classes}>
			{label || children}
		</label>
	);
}
