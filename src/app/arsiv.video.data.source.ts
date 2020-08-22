import { IArsivVideo } from './modeller/iarsiv';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ArsivService } from './servisler/arsiv.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

export class ArsivVideoDataSource extends DataSource<IArsivVideo | undefined> {
  private sayfaSayisi = 100;
  private sonSayfa = 0;

  private cacheVideo = Array.from<IArsivVideo>({ length: 0 });
  private videoData = new BehaviorSubject<(IArsivVideo | undefined)[]>(this.cacheVideo);
  private subscription = new Subscription();

  constructor(private arsivService: ArsivService, private seciliVideo: IArsivVideo = null) {
    super();
    this._videoGetir();
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(IArsivVideo | undefined)[] | ReadonlyArray<IArsivVideo | undefined>> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        const gecerliSayfa = this._indexlemeIcinSayfayiGetir(range.end);

        if (gecerliSayfa > this.sonSayfa) {
          this.sonSayfa = gecerliSayfa;
          this._videoGetir();
        }
      })
    );
    return this.videoData;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _videoGetir(): void {
    // for (let i = 0; i < this.sayfaSayisi; ++i) {
    this.arsivService.videolar.subscribe(res => {
      this.cacheVideo = this.cacheVideo.concat(res.filter(x => x !== this.seciliVideo));
      this.videoData.next(this.cacheVideo);
    });
    // }
  }

  private _indexlemeIcinSayfayiGetir(i: number): number {
    return Math.floor(i / this.sayfaSayisi);
  }
}
