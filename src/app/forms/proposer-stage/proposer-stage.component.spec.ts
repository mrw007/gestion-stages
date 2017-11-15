import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerStageComponent } from './proposer-stage.component';

describe('ProposerStageComponent', () => {
  let component: ProposerStageComponent;
  let fixture: ComponentFixture<ProposerStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
