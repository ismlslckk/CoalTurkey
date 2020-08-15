import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ArsivService } from '../servisler/arsiv.service';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { IArsivGorsel } from '../modeller/iarsiv';

@Component({
  selector: 'app-arsiv-detay',
  templateUrl: './arsiv-detay.component.html',
  styleUrls: ['./arsiv-detay.component.css']
})
export class ArsivDetayComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;

  constructor(
    private matDialogRef: MatDialogRef<ArsivDetayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IArsivGorsel,
    private arsivService: ArsivService
  ) {
    this.arsivGorselDataSource = new ArsivGorselDataSource(arsivService);
  }

  ngOnInit() {
    console.log(this.data);
  }

  private gorselDetayGetir() {}
}
