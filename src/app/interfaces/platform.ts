import { PlatformName } from "../types/platformName";
import { Subscription } from "../types/subscription";

export interface Platform {
    name: PlatformName,
    subscriptions: Array<Subscription> | undefined
}
