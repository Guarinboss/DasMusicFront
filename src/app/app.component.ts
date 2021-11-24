import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentAlbumComponent } from './dialogs/dialog-content-album/dialog-content-album.component';
import { DialogContentArtistComponent } from './dialogs/dialog-content-artist/dialog-content-artist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(public dialog: MatDialog){

  } 

  title = 'MusicStore';

  sidenavWidth = 18;
  ngStyle: string | undefined;
  

  decrease() {
    this.sidenavWidth = 5;

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentArtistComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

  openDialogAlbum() {
    const dialogRef = this.dialog.open(DialogContentAlbumComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

  
}

