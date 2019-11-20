/*
 * Copyright (c)  Arif Onur Şen
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Arif Onur Şen <a.onursen@gmail.com> 2019.
 */

import { Routes } from '@angular/router';
import { ArsivComponent } from './arsiv/arsiv.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { HaritaComponent } from './harita/harita.component';
import { ArsivAnaSayfaComponent } from './arsiv/arsiv-ana-sayfa/arsiv-ana-sayfa.component';
import { KurumsalAnaSayfaComponent } from './kurumsal/kurumsal-ana-sayfa/kurumsal-ana-sayfa.component';
import { ArsivAraComponent } from './arsiv/arsiv-ara/arsiv-ara.component';

export const appRoutes: Routes = [
  {
    path: 'arsiv',
    component: ArsivComponent,
    children: [{ path: 'ana-sayfa', component: ArsivAnaSayfaComponent }, { path: 'ara', component: ArsivAraComponent }]
  },
  {
    path: 'kurumsal',
    component: KurumsalComponent,
    children: [{ path: 'ana-sayfa', component: KurumsalAnaSayfaComponent }]
  },
  { path: 'harita', component: HaritaComponent },
  { path: '', redirectTo: '/kurumsal/ana-sayfa', pathMatch: 'full' },
  { path: '**', component: KurumsalComponent }
];
