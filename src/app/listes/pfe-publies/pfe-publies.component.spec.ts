import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfePubliesComponent } from './pfe-publies.component';

describe('PfePubliesComponent', () => {
  let component: PfePubliesComponent;
  let fixture: ComponentFixture<PfePubliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfePubliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfePubliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
