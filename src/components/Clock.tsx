import Widget from "@/components/ui/widget";
import TimeService from "@/services/time";

export default function Clock() {
	const { changeFormat, time, cleanup } = TimeService;

	return (
		<Widget
			as="button"
			cssClasses={["clock"]}
			onClicked={changeFormat}
			onDestroy={cleanup}
		>
			{time()}
		</Widget>
	);
}
