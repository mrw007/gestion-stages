import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesProposesComponent } from './stages-proposes.component';

describe('StagesProposesComponent', () => {
  let component: StagesProposesComponent;
  let fixture: ComponentFixture<StagesProposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagesProposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesProposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
