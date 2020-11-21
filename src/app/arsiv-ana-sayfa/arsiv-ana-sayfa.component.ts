import { Component, OnInit } from '@angular/core';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { ArsivService } from '../servisler/arsiv.service';
import { MatDialog } from '@angular/material';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { IEtiket, IEtiketCokDilli, IEtiketList } from '../modeller/ietiket';
import { Router } from '@angular/router';
import { DilService } from '../servisler/dil.service';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';
import { ArsivVideoDataSource } from '../arsiv.video.data.source';

@Component({
  selector: 'app-arsiv-ana-sayfa',
  templateUrl: './arsiv-ana-sayfa.component.html',
  styleUrls: ['./arsiv-ana-sayfa.component.css']
})
export class ArsivAnaSayfaComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;
  arsivVideoDataSource: ArsivVideoDataSource;

  etiketList: IEtiketList = { EtiketOrtakIdList: null, Sayfa: 0, PasiflerideGetir: false };
  seciliDil: string;
  toplamVeriSayisi = 0;

  etiketler: IEtiket[];
  etiketAlanlar = { text: 'Ad', value: 'OrtakId' };
  seciliEtiketler: number[] = [];
  etiketAraText = {
    Turkce: {
      gorselArsivBaslik: 'Görsel Arşiv',
      gorselArsivAciklama:
        'Basın, sivil toplum kuruluşları ve yerel hareketler için yüksek çözünürlüklü kömürlü termik santral fotoğraf ve videolar',
      gorsel: 'Görsellerde ara',
      video: 'Videolarda ara'
    },
    Ingilizce: {
      gorselArsivBaslik: 'Visual Archive',
      gorselArsivAciklama: 'High resolution coal power plant photos and videos for the press, NGOs and local movements',
      gorsel: 'Search in Images',
      video: 'Search in Videos'
    }
  };

  seciliArsivTip = 'gorsel';

  constructor(
    private arsivService: ArsivService,
    private dilService: DilService,
    private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.arsivService.aramaAktif.next(false);
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
      this.arsivService.etiketler.subscribe(etiketler => {
        this.etiketler = etiketler.map(x => x[seciliDil]);
      });
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

  etiketAraFormSubmit() {
    this.arsivService.seciliEtiketlerId.next(this.seciliEtiketler);
    this.router.navigate(['/ara']);
  }

  sayfaDegistir(sayfa: number) {
    if (this.toplamVeriSayisi > 100 && Number.isInteger(sayfa / 100)) {
      this.etiketList.Sayfa = sayfa / 100;
      this.arsivService.gorselGetirEtiketList(this.etiketList);
    }
  }
}
