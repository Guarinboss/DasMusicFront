import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentArtistComponent } from './dialog-content-artist.component';

describe('DialogContentArtistComponent', () => {
  let component: DialogContentArtistComponent;
  let fixture: ComponentFixture<DialogContentArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
