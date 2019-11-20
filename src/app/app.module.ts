import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routes';
import { RouterModule } from '@angular/router';
import { ArsivComponent } from './arsiv/arsiv.component';
import { HaritaComponent } from './harita/harita.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { ArsivAnaSayfaComponent } from './arsiv/arsiv-ana-sayfa/arsiv-ana-sayfa.component';
import { KurumsalAnaSayfaComponent } from './kurumsal/kurumsal-ana-sayfa/kurumsal-ana-sayfa.component';
import { ArsivDetayComponent } from './arsiv/arsiv-detay/arsiv-detay.component';
import { ArsivAraComponent } from './arsiv/arsiv-ara/arsiv-ara.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ArsivService } from './servisler/arsiv.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArsivComponent,
    HaritaComponent,
    KurumsalComponent,
    ArsivAnaSayfaComponent,
    KurumsalAnaSayfaComponent,
    ArsivDetayComponent,
    ArsivAraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ScrollingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [ArsivDetayComponent],
  providers: [ArsivService],
  bootstrap: [AppComponent]
})
export class AppModule {}
