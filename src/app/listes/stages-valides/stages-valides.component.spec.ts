import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesValidesComponent } from './stages-valides.component';

describe('StagesValidesComponent', () => {
  let component: StagesValidesComponent;
  let fixture: ComponentFixture<StagesValidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagesValidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
