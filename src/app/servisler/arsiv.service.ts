import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApiCevap } from '../modeller/iapi-cevap';
import { IArsivGorsel } from '../modeller/iarsiv';

@Injectable({
  providedIn: 'root'
})
export class ArsivService {
  gorseller = new BehaviorSubject([
    {
      DosyaAd: 'Deneme Görsel 1',
      Yatay: true
    },
    {
      DosyaAd: 'Deneme Görsel 2',
      Yatay: true
    },
    {
      DosyaAd: 'Deneme Görsel 3',
      Yatay: false
    },
    {
      DosyaAd: 'Deneme Görsel 4',
      Yatay: false
    },
    {
      DosyaAd: 'Deneme Görsel 5',
      Yatay: true
    }
  ]);

  constructor(private httpClient: HttpClient) {}

  gorselGetir(): Observable<IApiCevap> {
    return this.httpClient.get<IApiCevap>('');
  }

  gorselAraEtiketeGore(etiketler: string[]): Observable<IApiCevap> {
    return this.httpClient.post<IApiCevap>('', etiketler);
  }
}
