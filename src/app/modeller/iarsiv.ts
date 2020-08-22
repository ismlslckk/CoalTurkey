import { IEtiket } from './ietiket';

export interface IArsivGorsel {
  Id?: number;
  Durum?: boolean;
  Etiketler?: IEtiket[];
  GorselUrl?: string;
  GorselUrlYatay1280X720?: string;
  GorselUrlYatay2560X1440?: string;
  GorselUrlYatay3840X2160?: string;
  GorselUrlDikey2160X3840?: string;
  GorselUrlDikey1440X2560?: string;
  GorselUrlDikey720X1280?: string;
  Ingilizce?: IArsivGorselBilgi;
  TelifSahip?: ITelifSahip;
  Yatay?: boolean;
}

export interface IArsivGorselBilgi {
  Id?: number;
  AramaAd?: string;
  Durum?: boolean;
  GorselAciklama?: string;
  GorselAd?: string;
  GuncellenmeTarih?: string;
}

export interface IArsivVideo {
  Id?: number;
  Durum?: boolean;
  Etiketler?: IEtiket[];
  VideoUrl?: string;
  Ingilizce?: IArsivGorselBilgi;
  TelifSahip?: ITelifSahip;
  Yatay?: boolean;
}

export interface IArsivVideoBilgi {
  Id?: number;
  AramaAd?: string;
  Durum?: boolean;
  GorselAciklama?: string;
  DosyaAd?: string;
  VideoAd?: string;
  VideoAciklama?: string;
  GuncellenmeTarih?: string;
}

export interface ITelifSahip {
  Id?: number;
  Ad?: string;
  Soyad?: string;
  AdSoyad?: string;
}
