import { createClassList } from "@/components/ui/widget/widget.styles";
import { WidgetProps, WidgetType } from "@/components/ui/widget/widget.types";

const WIDGET_COMPONENTS: Record<
	WidgetType,
	(props: WidgetProps) => JSX.Element
> = {
	button: ({ label, children, ...props }) => (
		<button {...props}>{label || children}</button>
	),
	menubutton: ({ children, ...props }) => (
		<menubutton {...props}>{children}</menubutton>
	),
	label: ({ label, children, ...props }) => (
		<label {...props}>{label || children}</label>
	),
	centerbox: ({ children, ...props }) => (
		<centerbox {...props}>{children}</centerbox>
	),
	box: ({ children, ...props }) => <box {...props}>{children}</box>,
};

export default function Widget({
	as = "box",
	cssClasses,
	inlinePadding = false,
	children,
	...props
}: WidgetProps) {
	const classes = createClassList(cssClasses, inlinePadding);
	const commonProps = { cssClasses: classes, ...props };
	const Component = WIDGET_COMPONENTS[as];

	return <Component {...commonProps}>{children}</Component>;
}
