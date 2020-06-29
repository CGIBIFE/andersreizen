import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  @Input() required: boolean
  @Input() fieldName: string
  @Input() fGroup: FormGroup
  @Input() minLength:number
  constructor() { }

  ngOnInit() {
    if(this.fGroup !== undefined){
      this.fGroup.addControl(this.fieldName,new FormControl(this.value,[...(this.required ? [Validators.required]: []),...(this.minLength ? [Validators.min(this.minLength)]: []),...(this.type === 'email' ? [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,12}$")]: [])]))
    }

  }

}
