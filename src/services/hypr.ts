import { bind, Binding, Variable } from "astal";
import AstalHyprland from "gi://AstalHyprland";

class HyprService {
	private static instance: HyprService;
	private readonly hypr: AstalHyprland.Hyprland;
	private readonly workspacesMap: Map<number, AstalHyprland.Workspace>;
	private readonly workspaceAddedHandler: number;
	private readonly workspaceRemovedHandler: number;

	readonly workspaces: Binding<AstalHyprland.Workspace[]>;
	readonly focusedWorkspace: Binding<AstalHyprland.Workspace>;
	readonly focusedClient: Binding<AstalHyprland.Client>;

	private constructor() {
		this.hypr = AstalHyprland.get_default();
		this.workspacesMap = new Map();

		this.workspaces = bind(this.hypr, "workspaces");
		this.focusedWorkspace = bind(this.hypr, "focusedWorkspace");
		this.focusedClient = bind(this.hypr, "focusedClient");

		this.workspaces
			.get()
			.forEach((workspace) => this.workspacesMap.set(workspace.id, workspace));

		this.workspaceAddedHandler = this.hypr.connect(
			"workspace-added",
			(_, workspace) => this.workspacesMap.set(workspace.id, workspace)
		);

		this.workspaceRemovedHandler = this.hypr.connect(
			"workspace-removed",
			(_, id) => this.workspacesMap.delete(id)
		);
	}

	isFocused = (id: number): Variable<boolean> =>
		Variable.derive([this.focusedWorkspace], (ws) => ws.id === id);

	getClientCount = (id: number): Variable<number> => {
		const workspace = this.workspacesMap.get(id);
		if (!workspace) return Variable(0);
		return Variable.derive(
			[bind(workspace, "clients")],
			(clients) => clients.length
		);
	};

	focusWorkspace = (id: number): void => {
		this.hypr.dispatch("workspace", `${id}`);
	};

	cleanup(): void {
		this.hypr.disconnect(this.workspaceAddedHandler);
		this.hypr.disconnect(this.workspaceRemovedHandler);
	}

	static getInstance(): HyprService {
		if (!HyprService.instance) {
			HyprService.instance = new HyprService();
		}
		return HyprService.instance;
	}
}

export default HyprService.getInstance();
