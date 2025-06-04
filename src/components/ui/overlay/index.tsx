import { createOverlayClasses } from "@/components/ui/overlay/overlay.styles";
import { OverlayProps } from "@/components/ui/overlay/overlay.types";
import Widget from "@/components/ui/widget";

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
		id,
		border,
		backdrop,
		transition,
		extraClasses: Array.isArray(cssClasses) ? cssClasses : [],
	});

	return (
		<Widget cssClasses={overlayClasses} hexpand={false} visible={visible}>
			<Widget cssClasses={["overlay-content"]} spacing={spacing} {...props}>
				{children}
			</Widget>
		</Widget>
	);
}
