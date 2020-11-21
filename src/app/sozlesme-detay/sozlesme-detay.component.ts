import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';

@Component({
  selector: 'app-sozlesme-detay',
  templateUrl: './sozlesme-detay.component.html',
  styleUrls: ['./sozlesme-detay.component.css']
})
export class SozlesmeDetayComponent implements OnInit {
  tip: boolean;
  constructor(private matDialogRef: MatDialogRef<SozlesmeDetayComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tip = data.tip;
  }

  ngOnInit() {}
}
