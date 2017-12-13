import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesPfeComponent } from './demandes-pfe.component';

describe('DemandesPfeComponent', () => {
  let component: DemandesPfeComponent;
  let fixture: ComponentFixture<DemandesPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
