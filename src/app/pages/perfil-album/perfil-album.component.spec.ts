import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlbumComponent } from './perfil-album.component';

describe('PerfilAlbumComponent', () => {
  let component: PerfilAlbumComponent;
  let fixture: ComponentFixture<PerfilAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
