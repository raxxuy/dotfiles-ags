interface CreateOverlayClassesParams {
	border: boolean;
	backdrop: boolean;
	transition: boolean;
	extraClasses?: string[];
}

export function createOverlayClasses({
	border,
	backdrop,
	transition,
	extraClasses = [],
}: CreateOverlayClassesParams): string[] {
	const classes = ["overlay", ...extraClasses];

	if (transition) classes.push("overlay-transition");
	if (backdrop) classes.push("overlay-backdrop");
	if (border) classes.push("overlay-border");

	return classes;
}
