import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivDetayComponent } from './arsiv-detay.component';

describe('ArsivDetayComponent', () => {
  let component: ArsivDetayComponent;
  let fixture: ComponentFixture<ArsivDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsivDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsivDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
