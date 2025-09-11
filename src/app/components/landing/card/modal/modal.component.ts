import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'card-modal',
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  public cardInfo = input<any>();
  public showModal = input<boolean>();

  protected hideModal = output();

  disableModal() {
    this.hideModal.emit();
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
    },
  ]);
}
