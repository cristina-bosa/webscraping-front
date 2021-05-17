import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoxComponent } from './geox.component';

describe('GeoxComponent', () => {
  let component: GeoxComponent;
  let fixture: ComponentFixture<GeoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
