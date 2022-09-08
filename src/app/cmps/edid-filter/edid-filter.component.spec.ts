import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidFilterComponent } from './edid-filter.component';

describe('EdidFilterComponent', () => {
  let component: EdidFilterComponent;
  let fixture: ComponentFixture<EdidFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
