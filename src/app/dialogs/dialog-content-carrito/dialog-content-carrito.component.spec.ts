import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentCarritoComponent } from './dialog-content-carrito.component';

describe('DialogContentCarritoComponent', () => {
  let component: DialogContentCarritoComponent;
  let fixture: ComponentFixture<DialogContentCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
