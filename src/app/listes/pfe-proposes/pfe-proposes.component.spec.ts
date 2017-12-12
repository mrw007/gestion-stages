import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeProposesComponent } from './pfe-proposes.component';

describe('PfeProposesComponent', () => {
  let component: PfeProposesComponent;
  let fixture: ComponentFixture<PfeProposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfeProposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeProposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
