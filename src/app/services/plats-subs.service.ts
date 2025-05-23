import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatsSubsService {
  constructor() {}

  private streamingPlatforms = [
    {
      name: 'Crunchyroll',
      /*
      Info of the subscriptions was checked from here:
      https://store.crunchyroll.com/products/premium-streaming-membership-digital-gift-fan-tier-Ultimate_Fan_1_Month.html
      */
      subscriptions: [
        {
          name: 'Fan',
          membershipMonthsDuration: [1, 3, 12],
        },
        {
          name: 'Mega Fan',
          membershipMonthsDuration: [1, 12],
        },
        {
          name: 'Ultimate Fan',
          membershipMonthsDuration: [1, 12],
        },
      ],
    },
    {
      name: "HBO"
    }
  ];


  public getStreamingPlatforms() {
    return this.streamingPlatforms;
  }
}
