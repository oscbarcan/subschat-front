import { Component, input } from '@angular/core';
import { PlatformName } from '../../../../types/platformName';

@Component({
  selector: 'subs-explorer',
  imports: [],
  templateUrl: './subs-explorer.component.html',
  styleUrl: './subs-explorer.component.css'
})
export class SubsExplorerComponent {
  public currentPlatform = input.required<PlatformName>();

  
}
