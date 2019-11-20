import { Component, OnInit } from '@angular/core';
import { ArsivGorselDataSource } from '../arsiv.gorsel.data.source';
import { ArsivService } from '../../servisler/arsiv.service';
import { MatDialog } from '@angular/material';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { IEtiket } from '../../modeller/ietiket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arsiv-ana-sayfa',
  templateUrl: './arsiv-ana-sayfa.component.html',
  styleUrls: ['./arsiv-ana-sayfa.component.css']
})
export class ArsivAnaSayfaComponent implements OnInit {
  arsivGorselDataSource: ArsivGorselDataSource;

  etiketAramaParam: string;
  etiketAramaParamArray: string[] = [];

  constructor(private arsivService: ArsivService, private matDialog: MatDialog, private router: Router) {
    this.arsivGorselDataSource = new ArsivGorselDataSource(arsivService);
  }

  ngOnInit() {}

  gorselDetayDialogAc() {
    const arsivDetay = this.matDialog.open(ArsivDetayComponent, {
      height: '75%',
      width: '75%'
    });
  }

  etiketAraFormSubmit() {
    this.router.navigate(['/arsiv/ara']);
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
}
