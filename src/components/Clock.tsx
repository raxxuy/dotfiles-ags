import Widget from "@/components/core/widget";
import TimeService from "@/services/time";

export default function Clock() {
	const { changeFormat, time, date, cleanup } = TimeService;

	return (
		<Widget
			as="button"
			cssClasses={["clock"]}
			tooltipText={date()}
			onClicked={changeFormat}
			onDestroy={cleanup}
		>
			{time()}
		</Widget>
	);
}
