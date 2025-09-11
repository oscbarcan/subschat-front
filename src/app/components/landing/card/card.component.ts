import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public card = input<any>();
  public mode = input<'complex' | 'simple'>('complex');

  public showModal = output<any>();


  protected enableModal() {
    this.showModal.emit(this.card());
  }


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
