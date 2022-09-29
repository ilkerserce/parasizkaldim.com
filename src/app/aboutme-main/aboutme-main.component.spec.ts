import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeMainComponent } from './aboutme-main.component';

describe('AboutmeMainComponent', () => {
  let component: AboutmeMainComponent;
  let fixture: ComponentFixture<AboutmeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
