import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routes';
import { RouterModule } from '@angular/router';
import { ArsivAnaSayfaComponent } from './arsiv-ana-sayfa/arsiv-ana-sayfa.component';
import { ArsivDetayComponent } from './arsiv-detay/arsiv-detay.component';
import { ArsivAraComponent } from './arsiv-ara/arsiv-ara.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ArsivService } from './servisler/arsiv.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { SozlesmeDetayComponent } from './sozlesme-detay/sozlesme-detay.component';

@NgModule({
  declarations: [
    AppComponent,
    ArsivAnaSayfaComponent,
    ArsivDetayComponent,
    ArsivAraComponent,
    HeaderComponent,
    FooterComponent,
    SozlesmeDetayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ScrollingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MultiSelectAllModule
  ],
  entryComponents: [ArsivDetayComponent, SozlesmeDetayComponent],
  providers: [ArsivService],
  bootstrap: [AppComponent]
})
export class AppModule {}
