import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierPfeComponent } from './publier-pfe.component';

describe('PublierPfeComponent', () => {
  let component: PublierPfeComponent;
  let fixture: ComponentFixture<PublierPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
