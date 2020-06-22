import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() required: boolean;
  @Input() fieldName: string;
  @Input() fGroup: FormGroup;
  @Input() minLength: number;

  constructor() {
  }

  ngOnInit() {
    if (this.fGroup !== undefined) {
      this.fGroup.addControl(this.fieldName, new FormControl(this.value, [Validators.required, Validators.min(this.minLength)]))
    }

  }
}
