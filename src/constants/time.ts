export type TimeFormatKey = "12h" | "24h";

export const TimeFormats = {
	"12h": "%I:%M %p",
	"24h": "%H:%M",
} as const;

export const TimeFormatKeys = Object.keys(TimeFormats) as TimeFormatKey[];
