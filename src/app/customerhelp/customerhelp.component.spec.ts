import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhelpComponent } from './customerhelp.component';

describe('CustomerhelpComponent', () => {
  let component: CustomerhelpComponent;
  let fixture: ComponentFixture<CustomerhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerhelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
