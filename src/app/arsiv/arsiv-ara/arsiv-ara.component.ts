import { Component, OnInit } from '@angular/core';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { ArsivService } from '../../servisler/arsiv.service';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-arsiv-ara',
  templateUrl: './arsiv-ara.component.html',
  styleUrls: ['./arsiv-ara.component.css']
})
export class ArsivAraComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;

  constructor(private arsivService: ArsivService, private matDialog: MatDialog) {
    this.arsivGorselDataSource = new ArsivGorselDataSource(arsivService);
  }

  ngOnInit() {}

  gorselDetayDialogAc() {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '75%',
      width: '75%'
    });
  }
}
