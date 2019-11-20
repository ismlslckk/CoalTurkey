import { IArsivGorsel } from '../modeller/iarsiv';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ArsivService } from '../servisler/arsiv.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

export class ArsivGorselDataSource extends DataSource<IArsivGorsel | undefined> {
  private sayfaSayisi = 10;
  private sonSayfa = 0;

  private cacheGorsel = Array.from<IArsivGorsel>({ length: 0 });
  private gorselData = new BehaviorSubject<(IArsivGorsel | undefined)[]>(this.cacheGorsel);
  private subscription = new Subscription();

  constructor(private arsivService: ArsivService) {
    super();
    this._gorselleriGetir();
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(IArsivGorsel | undefined)[] | ReadonlyArray<IArsivGorsel | undefined>> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        const gecerliSayfa = this._indexlemeIcinSayfayiGetir(range.end);

        if (gecerliSayfa > this.sonSayfa) {
          this.sonSayfa = gecerliSayfa;
          this._gorselleriGetir();
        }
      })
    );
    return this.gorselData;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _gorselleriGetir(): void {
    for (let i = 0; i < this.sayfaSayisi; ++i) {
      this.arsivService.gorseller.subscribe(res => {
        this.cacheGorsel = this.cacheGorsel.concat(res);
        this.gorselData.next(this.cacheGorsel);
      });
    }
  }

  private _indexlemeIcinSayfayiGetir(i: number): number {
    return Math.floor(i / this.sayfaSayisi);
  }
}
