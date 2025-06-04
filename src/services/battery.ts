import { bind, Binding } from "astal";
import AstalBattery from "gi://AstalBattery";

export class BatteryService {
  private static instance: BatteryService;
  private readonly battery: AstalBattery.Device;

  readonly percentage: Binding<number>;
  readonly iconName: Binding<string>;

  private constructor() {
    this.battery = AstalBattery.get_default()!;

    this.percentage = bind(this.battery, "percentage");
    this.iconName = bind(this.battery, "iconName");
  }

  static getInstance(): BatteryService {
    if (!BatteryService.instance) {
      BatteryService.instance = new BatteryService();
    }
    return BatteryService.instance;
  }
}

export default BatteryService.getInstance();
