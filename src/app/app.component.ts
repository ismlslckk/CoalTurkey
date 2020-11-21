import { Component } from '@angular/core';
import { DilService } from './servisler/dil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoalTurkey';

  constructor(private dilService: DilService) {
    if (document.location.hostname.includes('.com')) {
      window.location.href = `${document.location.hostname.split('.com')[0]}.org`;
    } else {
      if (document.location.hostname.includes('coalinturkey')) {
        this.dilService.seciliDil.next('Ingilizce');
        document.querySelector('title').innerText = 'Coal In Turkey - Visual Archive';
        document
          .querySelector('meta[name="description"]')
          .setAttribute('content', 'High quality coal power plant photos and videos');
        document.querySelector('meta[property="og:title"]').setAttribute('content', 'Coal In Turkey - Visual Archive');
        document
          .querySelector('meta[property="og:description"]')
          .setAttribute('content', 'High quality coal power plant photos and videos');
      }
    }
  }
}
