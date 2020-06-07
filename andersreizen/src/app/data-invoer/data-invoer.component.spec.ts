import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInvoerComponent } from './data-invoer.component';

describe('DataInvoerComponent', () => {
  let component: DataInvoerComponent;
  let fixture: ComponentFixture<DataInvoerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataInvoerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInvoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
