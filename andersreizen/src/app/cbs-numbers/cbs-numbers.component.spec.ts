import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbsNumbersComponent } from './cbs-numbers.component';

describe('CbsNumbersComponent', () => {
  let component: CbsNumbersComponent;
  let fixture: ComponentFixture<CbsNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbsNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
