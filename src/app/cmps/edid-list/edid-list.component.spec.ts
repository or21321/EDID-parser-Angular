import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidListComponent } from './edid-list.component';

describe('EdidListComponent', () => {
  let component: EdidListComponent;
  let fixture: ComponentFixture<EdidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
