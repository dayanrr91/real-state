import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateServicesComponent } from './real-state-services.component';

describe('RealStateServicesComponent', () => {
  let component: RealStateServicesComponent;
  let fixture: ComponentFixture<RealStateServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealStateServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
