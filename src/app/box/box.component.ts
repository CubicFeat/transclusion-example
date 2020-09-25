import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit, AfterContentInit {
  @ContentChild('firstRef') first: ElementRef; // NOT a CSS selector

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.first.nativeElement.style.background = 'red';
  }
}
