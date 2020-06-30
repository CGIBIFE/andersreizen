import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  @Input() title: string;
  @Input() fullTitleBar: string
  @Input() hideTitleBar: boolean
  constructor() { }

  ngOnInit() {
  }

}
