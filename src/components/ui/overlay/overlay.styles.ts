// import { OverlayPosition, OverlayType } from "./overlay.types";

interface CreateOverlayClassesParams {
	id?: string;
	border: boolean;
	backdrop: boolean;
	transition: boolean;
	extraClasses?: string[];
}

export function createOverlayClasses({
	id,
	border,
	backdrop,
	transition,
	extraClasses = [],
}: CreateOverlayClassesParams): string[] {
	const classes = ["overlay", ...extraClasses];

	if (id) classes.push(`overlay-${id}`);
	if (transition) classes.push("overlay-transition");
	if (backdrop) classes.push("overlay-backdrop");
	if (border) classes.push("overlay-border");

	return classes;
}
