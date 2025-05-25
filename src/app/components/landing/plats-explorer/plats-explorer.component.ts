import { Component, inject, output, signal } from '@angular/core';
import { PlatsSubsService } from '../../../services/plats-subs.service';
import { NgClass } from '@angular/common';
import { SubsExplorerComponent } from './subs-explorer/subs-explorer.component';
import { PlatformName } from '../../../types/platformName';

@Component({
  selector: 'plats-explorer',
  imports: [NgClass, SubsExplorerComponent],
  templateUrl: './plats-explorer.component.html',
  styleUrl: './plats-explorer.component.css'
})
export class PlatsExplorerComponent {
  private platsSubsService = inject(PlatsSubsService);
  protected platforms = this.platsSubsService.getStreamingPlatforms();
  protected selectedPlatform = signal<PlatformName>('Crunchyroll');
  public changeBanner = output<PlatformName>();


  protected changePlatform(platform: PlatformName) {
    this.selectedPlatform.set(platform);
    this.changeBanner.emit(platform);
  }
}
