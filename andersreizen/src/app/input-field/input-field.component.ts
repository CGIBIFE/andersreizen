import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() label: string
  @Input() placeholder: string
  @Input() type: string
  @Input() unit: string
  @Input() disabled: boolean
  @Input() value: string
  constructor() { }

  ngOnInit() {
  }

}
