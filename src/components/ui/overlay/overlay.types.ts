import { BaseWidgetProps } from "../widget/widget.types";

// export type OverlayPosition = "top" | "bottom" | "left" | "right" | "center";
// export type OverlayType = "modal" | "popover" | "dropdown" | "tooltip";

export interface OverlayProps extends BaseWidgetProps {
	id?: string;
	border?: boolean;
	spacing?: number;
	backdrop?: boolean;
	transition?: boolean;
	anchorTo?: string;
}
