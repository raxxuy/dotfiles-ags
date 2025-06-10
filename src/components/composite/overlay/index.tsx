import Widget from "@/components/core/widget";
import { createOverlayClasses } from "./styles";
import { OverlayProps } from "./types";

export default function Overlay({
	id,
	children,
	spacing = 8,
	border = true,
	visible = true,
	backdrop = true,
	transition = true,
	cssClasses = [],
	...props
}: OverlayProps) {
	const overlayClasses = createOverlayClasses({
		border,
		backdrop,
		transition,
		extraClasses: Array.isArray(cssClasses) ? cssClasses : [],
	});

	return (
		<Widget name={`overlay-${id}`} cssClasses={overlayClasses} hexpand={false} visible={visible}>
			<Widget cssClasses={["overlay-content"]} spacing={spacing} {...props}>
				{children}
			</Widget>
		</Widget>
	);
}
