import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ArsivService } from '../../servisler/arsiv.service';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';

@Component({
  selector: 'app-arsiv-detay',
  templateUrl: './arsiv-detay.component.html',
  styleUrls: ['./arsiv-detay.component.css']
})
export class ArsivDetayComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;

  constructor(private matDialogRef: MatDialogRef<ArsivDetayComponent>, private arsivService: ArsivService) {
    this.arsivGorselDataSource = new ArsivGorselDataSource(arsivService);
  }

  ngOnInit() {}

  private gorselDetayGetir() {}
}
