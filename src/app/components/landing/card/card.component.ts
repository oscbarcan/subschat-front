import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public card = input<any>();
  public mode = input<'complex' | 'simple'>('complex');
  members = signal([
    {
      name: 'David',
      rol: 'admin',
    },
    {
      name: 'Pepe',
      rol: 'member',
    },
    {
      name: 'Antonio',
      rol: 'member',
    },
    {
      name: 'Felipe',
      rol: 'member',
    }
  ]);
}
