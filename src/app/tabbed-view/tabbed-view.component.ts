import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-view',
  templateUrl: './tabbed-view.component.html',
  styleUrls: ['./tabbed-view.component.css'],
})
export class TabbedViewComponent implements OnInit {
  @Input() inputData: string;
  constructor() {}

  ngOnInit(): void {}
}
