import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWithDrawerComponent } from './container-with-drawer.component';

describe('ContainerWithDrawerComponent', () => {
  let component: ContainerWithDrawerComponent;
  let fixture: ComponentFixture<ContainerWithDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerWithDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWithDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
