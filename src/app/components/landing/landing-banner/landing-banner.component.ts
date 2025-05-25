import { Component, inject, input, signal } from '@angular/core';
import { BannersService } from '../../../services/banners.service';
import { PlatformName } from '../../../types/platformName';
import { NgClass } from '@angular/common';
import { Banner } from '../../../interfaces/banner';

@Component({
  selector: 'landing-banner',
  imports: [NgClass],
  templateUrl: './landing-banner.component.html',
  styleUrl: './landing-banner.component.css'
})
export class LandingBannerComponent {

  private bannerService = inject(BannersService);
  protected banners = this.bannerService.getBanners();
  public bannerInput = input.required();
  // protected selected = signal<PlatformName>('Crunchyroll');

  // constructor(){
  //   setInterval(()=>{console.log(this.selected());}, 2000)
  // }

  // selectedBanner(name: PlatformName){
  //   this.selected.set(name);
  // }


}

