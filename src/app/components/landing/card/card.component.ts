import { Component, input } from '@angular/core';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public card = input<any>();
  public mode = input<'complex' | 'simple'>('complex');

}
