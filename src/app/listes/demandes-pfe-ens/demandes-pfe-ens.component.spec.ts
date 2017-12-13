import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesPfeEnsComponent } from './demandes-pfe-ens.component';

describe('DemandesPfeEnsComponent', () => {
  let component: DemandesPfeEnsComponent;
  let fixture: ComponentFixture<DemandesPfeEnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesPfeEnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesPfeEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
