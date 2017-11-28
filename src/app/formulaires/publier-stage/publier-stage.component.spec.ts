import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierStageComponent } from './publier-stage.component';

describe('PublierStageComponent', () => {
  let component: PublierStageComponent;
  let fixture: ComponentFixture<PublierStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
