import { IEtiket } from './ietiket';

export interface IArsivGorsel {
  Id?: number;
  Durum?: boolean;
  Etiketler?: IEtiket[];
  GorselUrl?: string;
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

export interface ITelifSahip {
  Id?: number;
  Ad?: string;
  Soyad?: string;
  AdSoyad?: string;
}
