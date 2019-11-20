import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivAnaSayfaComponent } from './arsiv-ana-sayfa.component';

describe('ArsivAnaSayfaComponent', () => {
  let component: ArsivAnaSayfaComponent;
  let fixture: ComponentFixture<ArsivAnaSayfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsivAnaSayfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsivAnaSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
