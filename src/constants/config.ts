import { TimeFormatKey } from "./time";

export interface Config {
	clock: {
		format: TimeFormatKey;
		updateInterval: number;
	};
}

export const defaultConfig: Config = {
	clock: {
		format: "24h",
		updateInterval: 1000,
	},
};
