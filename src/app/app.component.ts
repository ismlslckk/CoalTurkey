import { Component } from '@angular/core';
import { DilService } from './servisler/dil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoalTurkey';

  constructor(private dilService: DilService) {
    if (document.location.hostname.includes('coalinturkey')) {
      this.dilService.seciliDil.next('Ingilizce');
      document.querySelector('title').innerText = 'Visual Archive';
    }
  }
}
