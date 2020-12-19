import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';
import {DilService} from "../servisler/dil.service";

@Component({
  selector: 'app-sozlesme-detay',
  templateUrl: './sozlesme-detay.component.html',
  styleUrls: ['./sozlesme-detay.component.css']
})
export class SozlesmeDetayComponent implements OnInit {
  tip: boolean;
  seciliDil: string;
  kullaniciSozlesme = {
    Turkce: '<h2>Kullanıcı sözleşmesi</h2> <br>' +
      'Türkiye’de Kömür / Coal in Turkey internet sitesini ziyaret ettiğiniz için teşekkür ederiz. Sitemizin fotoğraf arşivindeki fotoğraf ve videoların kullanımı, özel koşullara bağlıdır. Lütfen bu koşulları dikkatle okuyunuz.<br>' +
      'İşbu sözleşme (bundan sonra kısaca “Sözleşme” adıyla belirtilecektir), fotoğrafları kullanan siz (bundan sonra “Kullanıcı” adıyla belirtilecektir) ile Ekosfer Derneği (bundan sonra kısaca “Ekosfer” adıyla belirtilecektir), arasında akdedilen ve aşağıdaki hususlarda mutabık kalındığını gösterir resmi bir sözleşmedir. Fotoğrafları kullanmanız bu koşulları kabul ettiğiniz anlamına gelir.<br>' +
      '<br><strong>Projenin tanımı:</strong><br>' +
      'Ekosfer, turkiyedekomur.org ve coalinturkey.org internet sitelerinde bir fotoğraf ve video arşivi bulundurur. Bu arşiv, fotoğraf ve video sanatçılarının gönüllü katkılarıyla oluşturulmuş ve ticari amaçlı kullanım olmamak kaydıyla sivil toplum örgütleri ve medyanın kullanımına açıktır. Kullanım şartları ise bu sözleşmenin maddelerinde belirtilmiştir.<br>' +
      '<br> <strong>Maddeler:</strong> <br> ' +
      '<strong>1.</strong> İnternette turkiyedekomur.org ve coalinturkey.org adresinlerinde hizmet veren sitenin fotoğraf arşivindeki fotoğrafların ticari amaçlar dışında kullanımı serbest ve ücretsizdir.<br>' +
      '<strong>2.</strong> Sitedeki fotoğraflar medya kuruluşlarında fotoğrafçının[ÖG1]  adı belirtilerek kullanılabilir. Sivil toplum örgütlerinin sosyal medya hesaplarında ve basılı yayınlarında mümkünse kaynak gösterilerek değilse göstermeden kullanılabilir.<br>' +
      '<strong>3.</strong> Sitemizdeki fotoğrafların fikri mülkiyet hakları fotoğrafların sahiplerine aittir. Fotoğrafçılar diledikleri anda buraya gönüllü bağışladıkları fotoğrafları geri çekebilir. Geri çektikleri andan itibaren bu fotoğraflar siteden kaldırılır ancak önceki kullanımlara dair geriye dönük işlem yapılmaz.<br>' +
      '<strong>4.</strong> Fotoğraflar kesinlikle bir çevre örgütünü kötüleme amaçlı bir kampanyanın parçası olarak kullanılamaz.<br>' +
      '<strong>5.</strong> Sözleşme dışındaki her türlü anlaşmanın yazılı olarak yapılması gerekmektedir.<br>' +
      '<strong>6.</strong> İhtilaf halinde İstanbul (Merkez) mahkemeleri yetkilidir. <br><br>' +
      '<br> <strong>Sözleşmenin Yürürlüğü ve Sona Ermesi:</strong> <br>' +
      'İşbu sözleşme, kullanıcıların turkiyedekomur.org ve coalinturkey.org internet sitelerinin sağladığı kullanmaları anında kendiliğinden yürürlüğe girer ve kullanımız sona ermediği müddetçe yürürlükte kalır.',
    Ingilizce: '<h2>User agreement</h2> <br>' +
      'Thank you for visiting the Coal in Turkey website. The use of photos and videos in the photo archive of our website is subject to special conditions. Please read these conditions carefully. <br>' +
      'This agreement (hereinafter "Agreement") is an official agreement between you, the user of the photos (hereinafter "User") and the Ekosfer Association (hereinafter "Ekosfer"), showing that the following terms and conditions have been agreed upon. By using the photos, you accept these terms and conditions. <br>' +
      '<br> <strong>Description of the project:</strong> <br>' +
      'Ekosfer keeps a photo and video archive at turkiyedekomur.org  a coalinturkey.org websites. This archive was created with the voluntary contributions of photography and video artists and is available to non-governmental organizations and the media, provided that it is not used for commercial purposes. The terms of use are specified in the articles of this agreement. <br>' +
      '<br> <strong>Terms and conditions:</strong> <br>' +
      '<strong>1.</strong> The photos at turkiyedekomur.org and coalinturkey.org are available free of charge for non-commercial use only.  <br>' +
      '<strong>2.</strong> The photos on the website can be used by media outlets by specifying the name of the photographer[ÖG1]. [ They can also be used on social media accounts and printed publications of non-governmental organizations by mentioning the source, if possible. <br>' +
      '<strong>3.</strong> The intellectual property rights of the photos on our website belong to the owners of the photos. Photographers may withdraw the photos, which were donated to our website on a voluntary basis, at any time. From the moment of their withdrawal, the photos will be removed from the website, but no retrospective action will be taken on previous uses. <br>' +
      '<strong>4.</strong> Under no circumstances can the photos be used as part of a campaign to defame an environmental organization. <br>' +
      '<strong>5.</strong> Any other agreement between the parties must be made in writing. <br>' +
      '<strong>6.</strong> In the event of dispute, İstanbul (Central) courts shall be authorized. <br>' +
      '<br> <strong>Enforcement and Termination:</strong> <br>' +
      'This Agreement shall take effect as soon as the User starts using the photos available at  turkiyedekomur.org  and  coalinturkey.org and shall remain in force as long as the photos are in use.'
  }

  constructor(private matDialogRef: MatDialogRef<SozlesmeDetayComponent>, private dilService: DilService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tip = data.tip;
    this.dilService.seciliDil.subscribe(seciliDil => {
      this.seciliDil = seciliDil;
    })
  }

  ngOnInit() {}
}
