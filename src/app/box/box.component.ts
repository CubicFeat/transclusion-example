import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit, AfterContentInit {
  // @ContentChild('firstRef') first: ElementRef; // NOT a CSS selector

  @ContentChild(ListComponent) list: ListComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // this.first.nativeElement.style.background = 'red';
    this.list.colorItRed = true;
  }
}
