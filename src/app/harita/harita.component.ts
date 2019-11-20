import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptService } from '../servisler/script.service';

@Component({
  selector: 'app-harita',
  templateUrl: './harita.component.html',
  styleUrls: [
    '../../assets/harita/css/bootstrap.min.css',
    '../../assets/harita/css/leaflet.css',
    './harita.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HaritaComponent implements OnInit, OnDestroy {
  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    this.scriptService.headScriptEkle('assets/harita/js/jquery.min.js').then(data => {
      this.scriptService.headScriptEkle('assets/harita/js/bootstrap.min.js').then(data1 => {
        this.scriptService
          .headScriptEkle('https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBjJsS26aqbFWkWSzsg00U8tFLRUN9rr9U')
          .then(data2 => {
            this.scriptService.headScriptEkle('assets/harita/js/leaflet.js').then(data3 => {
              this.scriptService.headScriptEkle('assets/harita/js/leaflet.googlemutant.js').then(data4 => {
                this.scriptService.headScriptEkle('assets/harita/js/leaflet.prunecluster.js').then(data5 => {
                  this.scriptService.headScriptEkle('assets/harita/js/jquery.dataTables.min.js').then(data6 => {
                    this.scriptService.headScriptEkle('assets/harita/js/papaparse.min.js').then(data7 => {
                      this.scriptService.headScriptEkle('assets/harita/js/lodash.min.js').then(data8 => {
                        this.scriptService.headScriptEkle('assets/harita/js/url.search.params.min.js').then(data9 => {
                          this.scriptService.headScriptEkle('assets/harita/js/jquery.mark.min.js').then(data10 => {
                            this.scriptService.headScriptEkle('assets/harita/js/index.js').then(data11 => {
                              console.log(data);
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
      });
    });
  }

  ngOnDestroy(): void {
    this.scriptService.headScriptSil(['assets/js/jquery.min.js', 'assets/js/bootstrap.min.js']);
  }
}
