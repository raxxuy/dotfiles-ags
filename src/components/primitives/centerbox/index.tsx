import { createBaseClasses } from "@/components/core/base/styles";
import { BaseProps } from "@/components/core/base/types";
import { CenterBoxProps } from "astal/gtk4/widget";

export interface CenterBoxComponentProps extends BaseProps, CenterBoxProps {}

export default function CenterBox({
	children,
	cssClasses,
	inlinePadding,
	...props
}: CenterBoxComponentProps) {
	const classes = createBaseClasses({ cssClasses, inlinePadding });

	return (
		<centerbox {...props} cssClasses={classes}>
			{children}
		</centerbox>
	);
}
