import { Component, OnInit } from '@angular/core';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { ArsivService } from '../servisler/arsiv.service';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { MatDialog } from '@angular/material';
import { ArsivVideoDataSource } from '../arsiv.video.data.source';
import { IEtiketList } from '../modeller/ietiket';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';
import { DilService } from '../servisler/dil.service';

@Component({
  selector: 'app-arsiv-ara',
  templateUrl: './arsiv-ara.component.html',
  styleUrls: ['./arsiv-ara.component.css']
})
export class ArsivAraComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;
  arsivVideoDataSource: ArsivVideoDataSource;

  etiketList: IEtiketList = { EtiketOrtakIdList: null, Sayfa: 0, PasiflerideGetir: false };
  seciliDil: string;
  toplamVeriSayisi = 0;

  seciliArsivTip = 'gorsel';

  arsivAraText = {
    Turkce: {
      ara: 'Arama Sonuçları',
      sira: 'Sırala',
      varsayilan: 'Varsayılan',
      yatay: 'Yatay',
      dikey: 'Dikey',
      eski: 'Tarihe Göre (Eski)',
      yeni: 'Tarihe Göre (Yeni)'
    },
    Ingilizce: {
      ara: 'Search Results',
      sira: 'Sort By',
      varsayilan: 'Default',
      yatay: 'Landscape',
      dikey: 'Portrait',
      eski: 'Date By (Oldest)',
      yeni: 'Date By (Newest)'
    }
  };

  constructor(private arsivService: ArsivService, private dilService: DilService, private matDialog: MatDialog) {}

  ngOnInit() {
    this.arsivService.aramaAktif.next(true);
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    });
    this.arsivService.seciliEtiketlerId.subscribe(seciliEtiketler => {
      this.etiketList.EtiketOrtakIdList = seciliEtiketler;
      this.videoVeyaGorselTrigger();
    });
    this.arsivService.seciliEtiketId.subscribe(etiketId => {
      if (etiketId) {
        this.etiketList = { EtiketOrtakIdList: [etiketId], Sayfa: 0, PasiflerideGetir: false };
        this.videoVeyaGorselTrigger();
      }
    });
    this.arsivService.seciliArsivTip.subscribe(seciliArsivTip => {
      this.seciliArsivTip = seciliArsivTip;
      this.videoVeyaGorselTrigger();
    });
  }

  videoVeyaGorselTrigger(): void {
    this.arsivGorselDataSource = null;
    this.arsivVideoDataSource = null;
    if (this.arsivService.seciliArsivTip.value === 'gorsel') {
      this.gorselGetirEtiket();
    } else if (this.arsivService.seciliArsivTip.value === 'video') {
      this.videoGetirEtiket();
    }
  }

  gorselGetirEtiket(): void {
    this.arsivService.gorselGetirEtiketList(this.etiketList).subscribe(cevap => {
      console.log(cevap);
      if (cevap.Basarili) {
        this.toplamVeriSayisi = cevap.Veri.length;
        this.arsivService.gorseller.next(cevap.Veri);
        this.arsivGorselDataSource = new ArsivGorselDataSource(this.arsivService);
      }
    });
  }

  videoGetirEtiket(): void {
    this.arsivService.videoGetirEtiketList(this.etiketList).subscribe(cevap => {
      if (cevap.Basarili) {
        this.toplamVeriSayisi = cevap.Veri.length;
        this.arsivService.videolar.next(cevap.Veri);
        this.arsivVideoDataSource = new ArsivVideoDataSource(this.arsivService);
      }
    });
  }

  gorselDetayDialogAc(arsivGorsel: IArsivGorsel) {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '90%',
      width: '80%',
      maxWidth: '80%',
      data: { gorsel: arsivGorsel }
    });
  }

  videoDetayDialogAc(arsivVideo: IArsivVideo) {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '90%',
      width: '80%',
      maxWidth: '80%',
      data: { video: arsivVideo }
    });
  }

  icerikSirala(seciliTip: string) {
    const sortBtn = document.getElementById('sortTextBtn');
    if (seciliTip === 'varsayilan' || seciliTip === 'yatay') {
      this.arsivService.gorseller.value.sort((val1, val2) =>
        val1.Yatay > val2.Yatay ? 1 : val2.Yatay > val1.Yatay ? -1 : 0
      );
      sortBtn.innerText =
        seciliTip === 'varsayilan'
          ? this.arsivAraText[this.seciliDil].varsayilan
          : this.arsivAraText[this.seciliDil].yatay;
    } else if (seciliTip === 'dikey') {
      this.arsivService.gorseller.value.sort((val1, val2) =>
        val1.Yatay > val2.Yatay ? -1 : val2.Yatay > val1.Yatay ? 1 : 0
      );
      sortBtn.innerText = this.arsivAraText[this.seciliDil].dikey;
    } else if (seciliTip === 'eski') {
      this.arsivService.gorseller.value.sort(
        (val1, val2) =>
          new Date(val1[this.seciliDil].YuklenmeTarih).getTime() -
          new Date(val2[this.seciliDil].YuklenmeTarih).getTime()
      );
      sortBtn.innerText = this.arsivAraText[this.seciliDil].eski;
    } else if (seciliTip === 'yeni') {
      this.arsivService.gorseller.value.sort(
        (val1, val2) =>
          new Date(val2[this.seciliDil].YuklenmeTarih).getTime() -
          new Date(val1[this.seciliDil].YuklenmeTarih).getTime()
      );
      sortBtn.innerText = this.arsivAraText[this.seciliDil].yeni;
    }
    this.arsivGorselDataSource = new ArsivGorselDataSource(this.arsivService);
  }

  sayfaDegistir(sayfa: number) {
    if (this.toplamVeriSayisi > 100 && Number.isInteger(sayfa / 100)) {
      this.etiketList.Sayfa = sayfa / 100;
      this.arsivService.gorselGetirEtiketList(this.etiketList).subscribe(cevap => {
        console.log(cevap);
      });
    }
  }
}
