import Widget from "@/components/ui/widget";
import HyprService from "@/services/hypr";
import { Variable } from "astal";

interface WorkspaceButtonProps {
	workspace: number;
}

export default function WorkspaceButton({ workspace }: WorkspaceButtonProps) {
	const { isFocused, getClientCount } = HyprService;

	const focused = isFocused(workspace);
	const clientCount = getClientCount(workspace);

	// Derive CSS classes based on focus state
	const cssClasses = Variable.derive([focused], (focused) => {
		const classes = ["workspace"];
		if (focused) classes.push("active");
		return classes;
	});

	// Derive label based on client count
	const label = Variable.derive([clientCount], (count) =>
		count > 0 ? "●" : "○"
	);

	const handleClick = () => {
		HyprService.focusWorkspace(workspace);
	};

	const cleanup = () => {
		cssClasses.drop();
		label.drop();
		focused.drop();
		clientCount.drop();
	};

	return (
		<Widget
			as="button"
			cssClasses={cssClasses()}
			label={label()}
			onClicked={handleClick}
			onDestroy={cleanup}
		/>
	);
}
