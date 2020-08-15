/*
 * Copyright (c)  Arif Onur Şen
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Arif Onur Şen <a.onursen@gmail.com> 2019.
 */

import { Routes } from '@angular/router';
import { ArsivAnaSayfaComponent } from './arsiv-ana-sayfa/arsiv-ana-sayfa.component';
import { ArsivAraComponent } from './arsiv-ara/arsiv-ara.component';

export const appRoutes: Routes = [
  { path: 'ara', component: ArsivAraComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ArsivAnaSayfaComponent }
];
