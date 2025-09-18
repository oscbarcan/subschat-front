import { NgClass } from '@angular/common';
import { Component, ElementRef, input, output, signal, viewChild } from '@angular/core';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';

@Component({
  selector: 'card-modal',
  imports: [NgClass, ClickOutsideDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  public cardInfo = input<any>();
  public showModal = input<boolean>();

  protected hideModal = output();
  protected blurContainer = viewChild<ElementRef>('blurContainer')

  disableModal() {
    this.hideModal.emit();
  }

  manageClickOutside(target: HTMLElement) {
    if (target == this.blurContainer()?.nativeElement) {
      this.disableModal();
    }
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
