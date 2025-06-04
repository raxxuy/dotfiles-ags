import Widget from "@/components/ui/widget";
import WorkspaceButton from "@/components/widgets/WorkspaceButton";
import HyprService from "@/services/hypr";

export default function Workspaces() {
	const { workspaces } = HyprService;

	return (
		<Widget as="box" cssClasses={["workspaces"]}>
			{workspaces.as((ws) => {
				const maxId = Math.max(...ws.filter((w) => w.id > 0).map((w) => w.id));
				return Array.from({ length: maxId }, (_, i) => (
					<WorkspaceButton workspace={i + 1} />
				));
			})}
		</Widget>
	);
}
