import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '2:30', name: 'Joji', weight: 1.007, symbol: 'Run'},
  {position: '2:34', name: 'Cuco', weight: 4.002, symbol: 'Hydrocodone'},
  {position: '2:56', name: 'Xtentacion', weight: 6.941, symbol: 'The remedy for a broken heart'},
  {position: '3:12', name: 'Homreshake', weight: 9.012, symbol: 'Just like my'},
  {position: '2:12', name: 'Juice', weight: 10.811, symbol: 'Hate the other side'},
  {position: '5:12', name: 'Post malone', weight: 12.007, symbol: 'Circles'},
  {position: '4:23', name: 'Travis', weight: 14.006, symbol: 'Goosebumps'},
  {position: '2:39', name: 'Lil tecca', weight: 15.994, symbol: 'Ransom'},
  {position: '1:56', name: 'Selena gomez', weight: 18.984, symbol: 'Love you like love a song'},
  {position: '3:02', name: 'Dua lipa', weight: 20.179, symbol: 'Break my heart'},
];


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  editField!: string;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  constructor() { }

  addData() {
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    //this.personList[id][property] = editField;
  }


  ngOnInit(): void {
  }

}
