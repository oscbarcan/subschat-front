import { Component, computed, inject, input } from '@angular/core';
import { PlatformName } from '../../../../types/platformName';
import { PlatsSubsService } from '../../../../services/plats-subs.service';

@Component({
  selector: 'subs-explorer',
  imports: [],
  templateUrl: './subs-explorer.component.html',
  styleUrl: './subs-explorer.component.css',
})
export class SubsExplorerComponent {
  public currentPlatform = input.required<PlatformName>();
  private platformsService = inject(PlatsSubsService);
  private platformsInfo = this.platformsService.getStreamingPlatforms();

  protected platformSubscriptions = computed(
    () =>
      this.platformsInfo
        .filter((platformInfo) => platformInfo.name == this.currentPlatform())
        .map((platform) => platform.subscriptions)[0]
  );

  // protected subscriptionsCount = computed(() =>
  //   this.platformSubscriptions()?.reduce((sum, subscription) => {
  //     return sum + subscription.membershipMonthsDuration.length;
  //   }, 0)
  // ); 

}
