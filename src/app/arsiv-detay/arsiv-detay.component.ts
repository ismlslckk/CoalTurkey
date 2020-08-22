import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ArsivService } from '../servisler/arsiv.service';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';
import { DilService } from '../servisler/dil.service';
import { arsivDetayCeviri } from '../statikler/arsivDetay';
import { IEtiketList } from '../modeller/ietiket';
import { ArsivVideoDataSource } from '../arsiv.video.data.source';

@Component({
  selector: 'app-arsiv-detay',
  templateUrl: './arsiv-detay.component.html',
  styleUrls: ['./arsiv-detay.component.css']
})
export class ArsivDetayComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;
  arsivVideoDataSource: ArsivVideoDataSource;
  seciliDil: string;
  arsivDetayCeviri = arsivDetayCeviri;
  etiketList: IEtiketList = { EtiketOrtakIdList: [], Sayfa: 0, PasiflerideGetir: false };
  gorsel: IArsivGorsel;
  video: IArsivVideo;

  constructor(
    private matDialogRef: MatDialogRef<ArsivDetayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { gorsel: IArsivGorsel; video: IArsivVideo },
    private arsivService: ArsivService,
    private dilService: DilService
  ) {}

  ngOnInit() {
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    });
    if (this.data.gorsel) {
      this.gorsel = this.data.gorsel;
      this.gorselGetirEtiket();
    } else if (this.data.video) {
      this.video = this.data.video;
      this.videoGetirEtiket();
    }
  }

  private gorselDetayGetir(arsivGorsel: IArsivGorsel) {
    this.data.gorsel = arsivGorsel;
  }

  private videoDetayGetir(arsivVideo: IArsivVideo) {
    this.data.video = arsivVideo;
  }

  private gorselGetirEtiket(): void {
    this.data.gorsel.Etiketler.forEach(value => {
      this.etiketList.EtiketOrtakIdList.push(value.Id);
    });
    this.arsivService.gorselGetirEtiketList(this.etiketList).subscribe(cevap => {
      if (cevap.Basarili) {
        this.arsivGorselDataSource = new ArsivGorselDataSource(this.arsivService, this.data.gorsel);
      }
    });
  }

  private videoGetirEtiket(): void {
    this.data.video.Etiketler.forEach(value => {
      this.etiketList.EtiketOrtakIdList.push(value.Id);
    });
    this.arsivService.videoGetirEtiketList(this.etiketList).subscribe(cevap => {
      if (cevap.Basarili) {
        this.arsivVideoDataSource = new ArsivVideoDataSource(this.arsivService, this.data.video);
      }
    });
  }
}
