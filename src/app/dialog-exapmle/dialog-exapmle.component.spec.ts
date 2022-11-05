import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExapmleComponent } from './dialog-exapmle.component';

describe('DialogExapmleComponent', () => {
  let component: DialogExapmleComponent;
  let fixture: ComponentFixture<DialogExapmleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExapmleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExapmleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
