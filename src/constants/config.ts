import { TimeFormatKey } from "./time";

export interface Config {
  variables: {
    "font-size": string;
		"font-family": string | null;
    "spacing-xs": string;
    "spacing-sm": string;
    "spacing-md": string;
		"border-radius-sm": string;
		"border-radius-md": string;
		"border-width": string;
		"border-color": string;
		"transition-fast": string;
		"transition-normal": string;
		"transition-slow": string;
		"shadow-sm": string;
		"shadow-md": string;
		"shadow-lg": string;
  };
  clock: {
    format: TimeFormatKey;
    updateInterval: number;
  };
}

export const defaultConfig: Config = {
  variables: {
    "font-size": "14px",
		"font-family": null,
    "spacing-xs": "2px",
    "spacing-sm": "10px",
    "spacing-md": "16px",
		"border-radius-sm": "8px",
		"border-radius-md": "10px",
		"border-width": "1px",
		"border-color": "rgba(255, 255, 255, 0.1)",
		"transition-fast": "150ms ease",
		"transition-normal": "250ms ease",
		"transition-slow": "350ms ease",
		"shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.1)",
		"shadow-md": "0 4px 6px rgba(0, 0, 0, 0.1)",
		"shadow-lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
  },
  clock: {
    format: "24h",
    updateInterval: 1000,
  },
};
