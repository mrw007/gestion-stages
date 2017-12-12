import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerPfeComponent } from './proposer-pfe.component';

describe('ProposerPfeComponent', () => {
  let component: ProposerPfeComponent;
  let fixture: ComponentFixture<ProposerPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
