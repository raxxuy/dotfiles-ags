import { WidgetProps } from "@/components/core/widget/types";
import { Binding } from "astal";

export interface OverlayStyleProps {
	border?: boolean;
	backdrop?: boolean;
	transition?: boolean;
	shadow?: boolean;
	rounded?: boolean;
}

export interface OverlayProps extends Omit<WidgetProps, "as"> {
	id?: string;
	border?: boolean;
	visible?: boolean | Binding<boolean>;
	spacing?: number;
	backdrop?: boolean;
	transition?: boolean;
	anchorTo?: string;
}
