import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozlesmeDetayComponent } from './sozlesme-detay.component';

describe('SozlesmeDetayComponent', () => {
  let component: SozlesmeDetayComponent;
  let fixture: ComponentFixture<SozlesmeDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozlesmeDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozlesmeDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
