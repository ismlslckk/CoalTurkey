import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumsalComponent } from './kurumsal.component';

describe('KurumsalComponent', () => {
  let component: KurumsalComponent;
  let fixture: ComponentFixture<KurumsalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurumsalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
