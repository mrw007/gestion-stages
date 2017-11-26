import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesAttenteComponent } from './entreprises-attente.component';

describe('EntreprisesAttenteComponent', () => {
  let component: EntreprisesAttenteComponent;
  let fixture: ComponentFixture<EntreprisesAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisesAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
