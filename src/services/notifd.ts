import AstalNotifd from "gi://AstalNotifd";

class NotifdService {
	private static instance: NotifdService;
	private readonly notifd: AstalNotifd.Notifd;
	private readonly notifications: Map<number, AstalNotifd.Notification>;
	private listeners: Map<string, Set<(...args: any[]) => void>>;

	private constructor() {
		this.notifd = AstalNotifd.get_default()!;
		this.notifications = new Map();
		this.listeners = new Map();

		this.notifd.connect("notified", (_, id) => {
			this.notifications.set(id, this.notifd.get_notification(id));
			console.log(this.notifications.values)
			this.emit("notified", id);
		});

		this.notifd.connect("resolved", (_, id) => {
			this.notifications.delete(id);
			this.emit("resolved", id);
		});
	}

	getNotifications = () => {
		return Array.from(this.notifications.values());
	};	

	clearAll() {
		this.notifications.clear();
	}

	getNotification(id: number) {
		return this.notifd.get_notification(id);
	}

	clearNotification = (id: number) => {
		this.notifications.get(id)?.dismiss();
		this.notifications.delete(id);
	}

	isDndEnabled() {
		return this.notifd.dont_disturb;
	}

	on(event: string, callback: (...args: any[]) => void) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event)!.add(callback);
	}

	off(event: string, callback: (...args: any[]) => void) {
		if (this.listeners.has(event)) {
			this.listeners.get(event)!.delete(callback);
		}
	}

	private emit(event: string, ...args: any[]) {
		if (this.listeners.has(event)) {
			this.listeners.get(event)!.forEach((callback) => callback(...args));
		}
	}

	static getInstance() {
		if (!NotifdService.instance) {
			NotifdService.instance = new NotifdService();
		}
		return NotifdService.instance;
	}
}

export default NotifdService.getInstance();
