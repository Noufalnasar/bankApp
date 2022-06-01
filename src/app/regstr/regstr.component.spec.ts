import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstrComponent } from "./RegstrComponent";

describe('RegstrComponent', () => {
  let component: RegstrComponent;
  let fixture: ComponentFixture<RegstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
