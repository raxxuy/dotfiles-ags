import { Config } from "@/constants/config";

export function generateScssVariables(config: Config): string {
	const variables = Object.entries(config.variables)
		.map(([key, value]) => `$${key}: ${value};`)
		.join("\n");

	return `// This file is auto-generated. Do not edit directly.
// Generated from config variables

${variables}
`;
}
