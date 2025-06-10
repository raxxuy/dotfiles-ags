import { RegularWindow } from "@/constants/ags";

interface SettingsWindowProps {
	onDestroy: () => void;
}

export function SettingsWindow({ onDestroy }: SettingsWindowProps) {
	return (
		<RegularWindow name="settings" visible onDestroy={onDestroy}>
			<label>HELLO</label>
		</RegularWindow>
	);
}
