import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentAlbumComponent } from './dialog-content-album.component';

describe('DialogContentAlbumComponent', () => {
  let component: DialogContentAlbumComponent;
  let fixture: ComponentFixture<DialogContentAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
