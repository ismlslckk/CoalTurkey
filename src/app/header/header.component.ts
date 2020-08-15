import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IEtiketCokDilli } from '../modeller/ietiket';
import { ArsivService } from '../servisler/arsiv.service';
import { DilService } from '../servisler/dil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('seciliDilButon', { static: false, read: ElementRef }) seciliDilButon: ElementRef;
  etiketAramaParam: string;
  etiketAramaParamArray: string[] = [];
  gorselEtiketler: IEtiketCokDilli[];
  videoEtiketler: IEtiketCokDilli[];
  seciliDil: string;

  constructor(private arsivService: ArsivService, private dilService: DilService, private router: Router) {}

  ngOnInit() {
    this.arsivService.gorselEtiketleriGetir().subscribe(cevap => {
      if (cevap.Basarili) {
        console.log(cevap.Veri);
        this.gorselEtiketler = cevap.Veri;
      }
    });
    this.arsivService.videoEtiketleriGetir().subscribe(cevap => {
      if (cevap.Basarili) {
        console.log(cevap.Veri);
        this.videoEtiketler = cevap.Veri;
      }
    });
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    });
  }

  etiketSecildi(etiketId: number): void {
    this.arsivService.seciliEtiketId.next(etiketId);
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

  dilDegistir(dil: string, event) {
    localStorage.setItem('seciliDil', dil);
    this.dilService.seciliDil.next(dil);
    this.seciliDilButon.nativeElement.innerHTML = event.target.innerHTML;
  }
}
