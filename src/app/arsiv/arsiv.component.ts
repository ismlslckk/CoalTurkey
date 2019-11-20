import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from '../servisler/script.service';

@Component({
  selector: 'app-arsiv',
  templateUrl: './arsiv.component.html',
  styleUrls: [
    '../../assets/arsiv/css/bootstrap.min.css',
    '../../assets/arsiv/css/bootstrap-responsive.min.css',
    '../../assets/arsiv/css/font-awesome.min.css',
    '../../assets/arsiv/css/fc-webicons.css',
    '../../assets/arsiv/css/styles.css',
    './arsiv.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ArsivComponent implements OnInit {
  etiketAramaParam: string;
  etiketAramaParamArray: string[] = [];

  constructor(private router: Router, private scriptService: ScriptService) {
    this.scriptService.headScriptEkle('assets/arsiv/js/libraries/jquery.min.js').then(data => {
      this.scriptService.headScriptEkle('assets/arsiv/js/bootstrap.min.js').then(data1 => {
        this.scriptService.headScriptEkle('assets/arsiv/js/libraries/placeholders.js').then(data2 => {
          this.scriptService.headScriptEkle('assets/arsiv/js/main.js').then(data3 => {});
        });
      });
    });
  }

  ngOnInit() {
    this.router.navigate(['/arsiv/ana-sayfa']);
  }

  etiketAramaInputChanged(event) {
    if (event.key === ',' && this.etiketAramaParam.split(',')[0].length > 1) {
      this.etiketAramaParamArray.push(this.etiketAramaParam.split(',')[0]);
      setTimeout(() => {
        this.etiketAramaParam = '';
      }, 100);
    }
  }

  arrayEtiketSil(etiket) {
    const index = this.etiketAramaParamArray.indexOf(etiket, 0);
    if (index > -1) {
      this.etiketAramaParamArray.splice(index, 1);
    }
  }
}
