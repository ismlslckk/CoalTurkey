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

  etiketAramaParam: string;
  etiketAramaParamArray: string[] = [];

  etiketList: IEtiketList = { EtiketOrtakIdList: null, Sayfa: 0, PasiflerideGetir: false };
  seciliDil: string;
  toplamVeriSayisi = 0;

  etiketler: IEtiket[];
  etiketAlanlar = { text: 'Ad', value: 'OrtakId' };
  seciliEtiketler: IEtiket[] = [];
  etiketAraText = {
    Turkce: {
      gorsel: 'Görsellerde Arayınız',
      video: 'Videolarda Arayınız'
    },
    Ingilizce: {
      gorsel: 'Search in Images',
      video: 'Search in Videos'
    }
  };

  constructor(
    private arsivService: ArsivService,
    private dilService: DilService,
    private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
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
    this.arsivService.seciliArsivTip.subscribe(_ => {
      this.videoVeyaGorselTrigger();
    });
  }

  private videoVeyaGorselTrigger(): void {
    this.arsivGorselDataSource = null;
    this.arsivVideoDataSource = null;
    if (this.arsivService.seciliArsivTip.value === 'gorsel') {
      this.gorselGetirEtiket();
    } else if (this.arsivService.seciliArsivTip.value === 'video') {
      this.videoGetirEtiket();
    }
  }

  private gorselGetirEtiket(): void {
    this.arsivService.gorselGetirEtiketList(this.etiketList).subscribe(cevap => {
      if (cevap.Basarili) {
        this.toplamVeriSayisi = cevap.Veri.length;
        this.arsivService.gorseller.next(cevap.Veri);
        this.arsivGorselDataSource = new ArsivGorselDataSource(this.arsivService);
      }
    });
  }

  private videoGetirEtiket(): void {
    this.arsivService.videoGetirEtiketList(this.etiketList).subscribe(cevap => {
      if (cevap.Basarili) {
        this.toplamVeriSayisi = cevap.Veri.length;
        this.arsivService.videolar.next(cevap.Veri);
        this.arsivVideoDataSource = new ArsivVideoDataSource(this.arsivService);
      }
    });
  }

  private gorselDetayDialogAc(arsivGorsel: IArsivGorsel) {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '75%',
      width: '85%',
      maxWidth: '85%',
      data: { gorsel: arsivGorsel }
    });
  }

  private videoDetayDialogAc(arsivVideo: IArsivVideo) {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '75%',
      width: '85%',
      maxWidth: '85%',
      data: { video: arsivVideo }
    });
  }

  private etiketAraFormSubmit() {
    this.router.navigate(['/ara']);
  }

  private etiketAramaInputChanged(event) {
    if (event.key === ',' && this.etiketAramaParam.split(',')[0].length > 1) {
      this.etiketAramaParamArray.push(this.etiketAramaParam.split(',')[0]);
      setTimeout(() => {
        this.etiketAramaParam = '';
      }, 100);
    }
  }

  private arrayEtiketSil(etiket) {
    const index = this.etiketAramaParamArray.indexOf(etiket, 0);
    if (index > -1) {
      this.etiketAramaParamArray.splice(index, 1);
    }
  }

  private sayfaDegistir(sayfa: number) {
    if (this.toplamVeriSayisi > 100 && Number.isInteger(sayfa / 100)) {
      this.etiketList.Sayfa = sayfa / 100;
      this.arsivService.gorselGetirEtiketList(this.etiketList).subscribe(cevap => {
        console.log(cevap);
      });
    }
  }
}
