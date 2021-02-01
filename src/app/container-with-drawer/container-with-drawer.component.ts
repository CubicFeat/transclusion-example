import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-with-drawer',
  templateUrl: './container-with-drawer.component.html',
  styleUrls: ['./container-with-drawer.component.css'],
})
export class ContainerWithDrawerComponent implements OnInit {
  @Input() panelTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
