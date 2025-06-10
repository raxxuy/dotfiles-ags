import { GObject } from "astal";
import { Astal, astalify, ConstructProps, Gtk } from "astal/gtk4";

export const { VERTICAL, HORIZONTAL } = Gtk.Orientation;
export const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor;
export const { EXCLUSIVE, IGNORE, NORMAL } = Astal.Exclusivity;
export const { CENTER, START, END } = Gtk.Align;
export const RegularWindow = astalify(Gtk.Window);

export class PopoverMenu extends Gtk.PopoverMenu {
	static {
		GObject.registerClass(this);
	}

	constructor(
		props: ConstructProps<PopoverMenu, Gtk.PopoverMenu.ConstructorProps>
	) {
		super(props as any);
	}
}
