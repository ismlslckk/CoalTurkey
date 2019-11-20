import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaritaComponent } from './harita.component';

describe('HaritaComponent', () => {
  let component: HaritaComponent;
  let fixture: ComponentFixture<HaritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
