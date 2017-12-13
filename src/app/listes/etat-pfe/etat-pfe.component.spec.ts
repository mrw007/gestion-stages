import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPfeComponent } from './etat-pfe.component';

describe('EtatPfeComponent', () => {
  let component: EtatPfeComponent;
  let fixture: ComponentFixture<EtatPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
