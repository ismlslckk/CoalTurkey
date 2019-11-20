import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivComponent } from './arsiv.component';

describe('ArsivComponent', () => {
  let component: ArsivComponent;
  let fixture: ComponentFixture<ArsivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
