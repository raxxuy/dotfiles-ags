import { Binding, Variable } from "astal";

export function createClassList(
	cssClasses?: string[] | Binding<string[]>,
	inlinePadding?: boolean
) {
	const baseClasses = ["widget"];
	if (inlinePadding) baseClasses.push("inline-padding");
	if (!cssClasses) return baseClasses;

	return Array.isArray(cssClasses)
		? [...baseClasses, ...cssClasses]
		: Variable.derive([cssClasses], (classes) => [
				...baseClasses,
				...classes,
		  ])();
}

export function appendClass(
	classes: string[] | Binding<string[]>,
	newClass: string
) {
	return Array.isArray(classes)
		? [...classes, newClass]
		: Variable.derive([classes], (cls) => [...cls, newClass])();
}
