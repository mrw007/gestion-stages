import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeProposesEntComponent } from './pfe-proposes-ent.component';

describe('PfeProposesEntComponent', () => {
  let component: PfeProposesEntComponent;
  let fixture: ComponentFixture<PfeProposesEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfeProposesEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeProposesEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
