import { Injectable } from '@angular/core';
import { Platform } from '../interfaces/platform';

@Injectable({
  providedIn: 'root',
})
export class PlatsSubsService {
  constructor() {}

  private streamingPlatforms:Platform[] = [
    {
      name: 'Crunchyroll',
      /*
      Info of the subscriptions was checked from here:
      https://store.crunchyroll.com/products/premium-streaming-membership-digital-gift-fan-tier-Ultimate_Fan_1_Month.html
      */
      subscriptions: [
      {
          name: 'Ultimate Fan',
          membershipMonthsDuration: [1, 12],
        },
        {
          name: 'Mega Fan',
          membershipMonthsDuration: [1, 12],
        },
        {
          name: 'Fan',
          membershipMonthsDuration: [1, 3, 12],
        },
      ],
    },
    {
      name: "HBO",
      subscriptions: undefined
    },
    {
      name: "Netflix",
      subscriptions: undefined
    },
    {
      name: "Amazon Prime",
      subscriptions: undefined
    },
    {
      name: "Coming soon",
      subscriptions: undefined
    }
  ];


  public getStreamingPlatforms() {
    return this.streamingPlatforms;
  }
}
