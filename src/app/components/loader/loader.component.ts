import { Component, ElementRef, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements OnInit {
  private el = inject(ElementRef);

  public loaderSize = input<number>(90);

  ngOnInit(): void {
    const thisElement = this.el.nativeElement as HTMLElement;
    thisElement.style.setProperty('--loader-width', `${this.loaderSize()}px`);
  }
}
