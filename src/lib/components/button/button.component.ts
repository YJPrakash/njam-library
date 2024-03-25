import { Component, Input } from '@angular/core';

@Component({
  selector: 'njam-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  type: 'primary' | 'secondary' = 'primary';
  
  @Input() label: string | null = null;

  leftIcon: string = ""
  rightIcon: string = ""
  
  constructor() {}
}
