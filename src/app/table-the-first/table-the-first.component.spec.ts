import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTheFirstComponent } from './table-the-first.component';

describe('TableOfThingsComponent', () => {
  let component: TableTheFirstComponent;
  let fixture: ComponentFixture<TableTheFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableTheFirstComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTheFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
