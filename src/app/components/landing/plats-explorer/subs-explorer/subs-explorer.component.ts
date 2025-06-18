import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { PlatformName } from '../../../../types/platformName';
import { PlatsSubsService } from '../../../../services/plats-subs.service';
import { Subscription } from '../../../../types/subscription';
import { NgClass } from '@angular/common';
import { MonthsPipe } from '../../../../pipes/months.pipe';

@Component({
  selector: 'subs-explorer',
  imports: [NgClass, MonthsPipe],
  templateUrl: './subs-explorer.component.html',
  styleUrl: './subs-explorer.component.css',
})
export class SubsExplorerComponent implements OnInit {
  public currentPlatform = input.required<PlatformName>();
  private platformsService = inject(PlatsSubsService);
  private platformsInfo = this.platformsService.getStreamingPlatforms();
  protected platformSubscriptions = computed(
    () =>
      this.platformsInfo
        .filter((platformInfo) => platformInfo.name == this.currentPlatform())
        .map((platform) => platform.subscriptions)[0]
  );

  protected selectedSubscription = signal<Subscription>({
    name: '',
    membershipMonthsDuration: [],
  });

  // protected subscriptionsCount = computed(() =>
  //   this.platformSubscriptions()?.reduce((sum, subscription) => {
  //     return sum + subscription.membershipMonthsDuration.length;
  //   }, 0)
  // );

  ngOnInit(): void {
    this.selectedSubscription.set(this.platformSubscriptions()?.[0]!);
  }

  changeSelectedSubscription(newSelectedSub: Subscription, monthsPerSub: number) {
    this.selectedSubscription.set({
      ...newSelectedSub,
      membershipMonthsDuration: [monthsPerSub],
    });
  }

  // constructor() {
  //   setInterval(() => {
  //     console.log(this.selectedSubscription());
  //   }, 2000);
  // }
}
