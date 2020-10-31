import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!move">{{ move }}</button>
    <button nbButton hero status="success" *ngIf="move === 'X'">{{ move }}</button>
    <button nbButton hero status="info" *ngIf="move === 'O'">{{ move }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() move: 'X' | 'O';
}
