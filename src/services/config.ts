import { Config, defaultConfig } from "@/constants/config";
import { generateScssVariables } from "@/scripts/generate-scss-vars";
import { readFile, Variable, writeFile } from "astal";

class ConfigService {
	private static instance: ConfigService;
	readonly config: Variable<Config>;

	private constructor() {
		this.config = new Variable<Config>(defaultConfig);

		try {
			const config = JSON.parse(readFile("src/settings.conf"));
			this.config.set(config);
		} catch (error) {
			console.error("Failed to load config:", error);
			this.config.set(defaultConfig);
		}

		// Generate initial SCSS variables
		this.generateScssVariables();
	}

	private generateScssVariables(): void {
		try {
			const scssContent = generateScssVariables(this.config.get());

			writeFile("scss/abstracts/_variables.scss", scssContent);

			console.log("SCSS variables generated successfully");
		} catch (error) {
			console.error("Failed to generate SCSS variables:", error);
		}
	}

	setClockFormat(format: Config["clock"]["format"]): void {
		this.config.set({
			...this.config.get(),
			clock: {
				...this.config.get().clock,
				format,
			},
		});
		this.saveConfig();
	}

	getConfig(): Config {
		return this.config.get();
	}

	private saveConfig(): void {
		try {
			writeFile(
				"src/settings.conf",
				JSON.stringify(this.config.get(), null, 2)
			);
			// Generate SCSS variables after saving config
			this.generateScssVariables();
			console.log("Config saved successfully");
		} catch (error) {
			console.error("Failed to save config:", error);
		}
	}

	static getInstance(): ConfigService {
		if (!ConfigService.instance) {
			ConfigService.instance = new ConfigService();
		}
		return ConfigService.instance;
	}
}

export default ConfigService.getInstance();
