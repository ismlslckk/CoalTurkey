import { Component, OnInit } from '@angular/core';
import { DilService } from '../servisler/dil.service';
import { ArsivDetayComponent } from '../arsiv-detay/arsiv-detay.component';
import { MatDialog } from '@angular/material';
import { SozlesmeDetayComponent } from '../sozlesme-detay/sozlesme-detay.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText = {
    Turkce: {
      komurBaslik: "Türkiye'de Kömür",
      komurIcerik:
        'Kömürün elektrik üretimindeki yeri, geleceği ve üretimi gibi konularda güncel veriler sunan bu proje kömürlü termik santraller haritası,görsel arşiv ve raporlar ile yerel hareketlerin veri ihtiyacını karşılamak ve bu konuda bilgi açığını kapatmak amacıyla Ekosfer tarafından oluşturulmuştur.',
      iletisimBaslik: 'İletişim',
      gizlilikBaslik: 'Gizlilik',
      gizlilikSozlesme: 'Gizlilik Politikası',
      kullaniciSozlesme: 'Kullanıcı Sözleşmesi',
      takipBaslik: 'Takip Et',
      copyright: 'Türkiye’de Kömür bir Ekosfer projesidir. © 2020'
    },
    Ingilizce: {
      komurBaslik: 'Coal In Turkey',
      komurIcerik:
        'This project, which offers up-to-date data on the place, future and production of coal in electricity generation, was created by Ekosphere in order to meet the data needs of local movements and to close the information gap on this subject with coal-fired thermal power plants map, visual archive and reports.',
      iletisimBaslik: 'Contact Us',
      gizlilikBaslik: 'Privacy',
      gizlilikSozlesme: 'Privacy Policy',
      kullaniciSozlesme: 'User Agreement',
      takipBaslik: 'Follow Us',
      copyright: 'Coal In Turkey is a Ekosfer project. © 2020'
    }
  };

  seciliDil: string;

  constructor(private dilService: DilService, private matDialog: MatDialog) {}

  ngOnInit() {
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    });
  }

  sozlesmeAc(tip: boolean): void {
    this.matDialog.open(SozlesmeDetayComponent, {
      height: '90%',
      width: '80%',
      maxWidth: '80%',
      data: { tip: tip }
    });
  }
}
