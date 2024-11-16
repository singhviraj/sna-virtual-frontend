import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatephoneComponent } from './navigatephone.component';

describe('NavigatephoneComponent', () => {
  let component: NavigatephoneComponent;
  let fixture: ComponentFixture<NavigatephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatephoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
