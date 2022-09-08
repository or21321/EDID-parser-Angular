import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidAppComponent } from './edid-app.component';

describe('EdidAppComponent', () => {
  let component: EdidAppComponent;
  let fixture: ComponentFixture<EdidAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
