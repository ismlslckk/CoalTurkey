import { Component, OnInit } from '@angular/core';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { ArsivService } from '../servisler/arsiv.service';
import { MatDialog } from '@angular/material';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { IEtiket, IEtiketCokDilli, IGorselGetirEtiket } from '../modeller/ietiket';
import { Router } from '@angular/router';
import { DilService } from '../servisler/dil.service';
import { IArsivGorsel } from '../modeller/iarsiv';

@Component({
  selector: 'app-arsiv-ana-sayfa',
  templateUrl: './arsiv-ana-sayfa.component.html',
  styleUrls: ['./arsiv-ana-sayfa.component.css']
})
export class ArsivAnaSayfaComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;

  etiketAramaParam: string;
  etiketAramaParamArray: string[] = [];

  etiketList: IGorselGetirEtiket = { EtiketOrtakIdList: [0], Sayfa: 0, PasiflerideGetir: false };
  seciliDil: string;
  toplamVeriSayisi = 0;

  constructor(
    private arsivService: ArsivService,
    private dilService: DilService,
    private matDialog: MatDialog,
    private router: Router
  ) {
    this.arsivGorselDataSource = new ArsivGorselDataSource(arsivService);
  }

  ngOnInit() {
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    });
    this.arsivService.seciliEtiketId.subscribe(etiketId => {
      this.etiketList = { EtiketOrtakIdList: etiketId == null ? null : [etiketId], Sayfa: 0, PasiflerideGetir: false };
      this.gorselGetirEtiket();
    });
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

  gorselDetayDialogAc(arsivGorsel: IArsivGorsel) {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '75%',
      width: '85%',
      maxWidth: '85%',
      data: arsivGorsel
    });
  }

  etiketAraFormSubmit() {
    this.router.navigate(['/ara']);
  }

  etiketAramaInputChanged(event) {
    if (event.key === ',' && this.etiketAramaParam.split(',')[0].length > 1) {
      this.etiketAramaParamArray.push(this.etiketAramaParam.split(',')[0]);
      setTimeout(() => {
        this.etiketAramaParam = '';
      }, 100);
    }
  }

  arrayEtiketSil(etiket) {
    const index = this.etiketAramaParamArray.indexOf(etiket, 0);
    if (index > -1) {
      this.etiketAramaParamArray.splice(index, 1);
    }
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
