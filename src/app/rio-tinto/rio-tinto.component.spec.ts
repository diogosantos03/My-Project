import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioTintoComponent } from './rio-tinto.component';

describe('RioTintoComponent', () => {
  let component: RioTintoComponent;
  let fixture: ComponentFixture<RioTintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RioTintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RioTintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
