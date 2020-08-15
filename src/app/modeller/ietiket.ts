export interface IEtiketCokDilli {
  Turkce: IEtiket;
  Ingilizce: IEtiket;
}

export interface IEtiket {
  Id?: number;
  Ad?: string;
  AramaAd?: string;
  Dil?: number;
  OrtakId?: number;
}

export interface IGorselGetirEtiket {
  EtiketOrtakIdList: number[];
  Sayfa: number;
  PasiflerideGetir: boolean;
}
