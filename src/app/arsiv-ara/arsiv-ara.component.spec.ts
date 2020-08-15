import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivAraComponent } from './arsiv-ara.component';

describe('ArsivAraComponent', () => {
  let component: ArsivAraComponent;
  let fixture: ComponentFixture<ArsivAraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsivAraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsivAraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
