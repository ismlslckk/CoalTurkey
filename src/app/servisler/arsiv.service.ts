import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApiCevap } from '../modeller/iapi-cevap';
import { IArsivGorsel, IArsivVideo } from '../modeller/iarsiv';
import { ApiURL } from '../utils/constants';
import { IEtiketCokDilli, IEtiketList } from '../modeller/ietiket';

@Injectable({
  providedIn: 'root'
})
export class ArsivService {
  gorseller = new BehaviorSubject<IArsivGorsel[]>([]);
  videolar = new BehaviorSubject<IArsivVideo[]>([]);
  etiketler = new BehaviorSubject<IEtiketCokDilli[]>([]);

  seciliEtiketId = new BehaviorSubject<number>(null);
  seciliEtiketlerId = new BehaviorSubject<number[]>(null);

  seciliArsivTip = new BehaviorSubject<string>('gorsel');
  aramaAktif = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  gorselGetir(): Observable<IApiCevap> {
    return this.httpClient.get<IApiCevap>('');
  }

  gorselAraEtiketeGore(etiketler: string[]): Observable<IApiCevap> {
    return this.httpClient.post<IApiCevap>('', etiketler);
  }

  gorselEtiketleriGetir(): Observable<IApiCevap> {
    return this.httpClient.get<IApiCevap>(`${ApiURL}Etiket/gorsel-etiketleri-al`);
  }

  videoEtiketleriGetir(): Observable<IApiCevap> {
    return this.httpClient.get<IApiCevap>(`${ApiURL}Etiket/video-etiketleri-al`);
  }

  etiketHepsiniGetir(): Observable<IApiCevap> {
    return this.httpClient.get<IApiCevap>(`${ApiURL}Etiket/hepsini-getir`);
  }

  gorselGetirEtiketList(etiketList: IEtiketList): Observable<IApiCevap> {
    return this.httpClient.post<IApiCevap>(`${ApiURL}arsivgorselbilgi/hepsini-getir`, etiketList);
  }

  videoGetirEtiketList(etiketList: IEtiketList): Observable<IApiCevap> {
    return this.httpClient.post<IApiCevap>(`${ApiURL}arsivvideobilgi/hepsini-getir`, etiketList);
  }
}
