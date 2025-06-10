import { Binding } from "astal";

export interface BaseProps {
	children?: any;
	cssClasses?: string[] | Binding<string[]>;
	inlinePadding?: boolean;
	label?: string | Binding<string>;
}
