import { Component, inject } from '@angular/core';
import { PlatsSubsService } from '../../../services/plats-subs.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'plats-explorer',
  imports: [NgClass],
  templateUrl: './plats-explorer.component.html',
  styleUrl: './plats-explorer.component.css'
})
export class PlatsExplorerComponent {
  private platsSubsService = inject(PlatsSubsService);
  protected platforms = this.platsSubsService.getStreamingPlatforms();

  
}
