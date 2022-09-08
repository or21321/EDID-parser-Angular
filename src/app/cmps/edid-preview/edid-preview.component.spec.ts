import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidPreviewComponent } from './edid-preview.component';

describe('EdidPreviewComponent', () => {
  let component: EdidPreviewComponent;
  let fixture: ComponentFixture<EdidPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
