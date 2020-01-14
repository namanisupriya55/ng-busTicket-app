import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDropdownComponent } from './places-dropdown.component';

describe('PlacesDropdownComponent', () => {
  let component: PlacesDropdownComponent;
  let fixture: ComponentFixture<PlacesDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
