import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesProposesEntComponent } from './stages-proposes-ent.component';

describe('StagesProposesEntComponent', () => {
  let component: StagesProposesEntComponent;
  let fixture: ComponentFixture<StagesProposesEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagesProposesEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesProposesEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
