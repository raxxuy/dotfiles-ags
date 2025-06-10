import { Variable } from "astal";
import { BaseProps } from "./types";

export const createBaseClasses = (props: BaseProps) => {
	const classes: string[] = ["widget"];

	if (props.inlinePadding) {
		classes.push("inline-padding");
	}

	if (Array.isArray(props.cssClasses)) {
		classes.push(...props.cssClasses);
	} else if (typeof props.cssClasses === "object") {
		return Variable.derive([props.cssClasses], (classes) => classes)();
	}

	return classes;
};
