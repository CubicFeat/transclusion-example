import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTheSecondComponent } from './table-the-second.component';

describe('TableTheSecondComponent', () => {
  let component: TableTheSecondComponent;
  let fixture: ComponentFixture<TableTheSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTheSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTheSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
