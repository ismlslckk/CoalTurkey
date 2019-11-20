import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumsalAnaSayfaComponent } from './kurumsal-ana-sayfa.component';

describe('KurumsalAnaSayfaComponent', () => {
  let component: KurumsalAnaSayfaComponent;
  let fixture: ComponentFixture<KurumsalAnaSayfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurumsalAnaSayfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumsalAnaSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
