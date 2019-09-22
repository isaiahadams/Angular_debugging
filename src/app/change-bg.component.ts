import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'change-bg',
  template: `<button 
  (click)="changeBg()" 
  >{{content}}</button>`,
  styles: [`button { padding: 10px; }`]
})
export class ChangeBgComponent  {

  // @ViewChild('body')
  // body: ElementRef;
  // The elment needs to have a #localRef

  body = this.el.nativeElement.ownerDocument.body;

  activateColor = 'white';

  @Output()
  colorChange = new EventEmitter<string>();
  // EventEmitter is for child parent communication

  content = 'Change Background';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeBg() {

    // this.body.nativeElement.style.background = 'lightblue';

    // this
    // .renderer
    // .selectRootElement('body')
    // .style
    // .background = 'lightblue';
    // Erases innerHTML
    
    this.colorChange.emit(this.activateColor);

    this.activateColor === 'white'
    ? this.activateColor = 'lightblue'
    : this.activateColor = '#FFFFF'

    this.renderer.setStyle(
      this.body,
      'background',
      this.activateColor
    )

  }

}
