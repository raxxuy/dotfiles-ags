import Widget from "@/components/ui/widget";
import TimeService from "@/services/time";

export default function Clock() {
	const { changeFormat, time } = TimeService;

	return (
		<Widget as="button" cssClasses={["clock"]} onClicked={changeFormat}>
			{time()}
		</Widget>
	);
}
