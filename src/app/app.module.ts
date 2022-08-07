import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SvgComponent } from './components/svg/svg.component';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { Gen1Component } from './components/gen1/gen1.component';

const ROUTES = [
  {
    path: '',
  },
  {
    path: 'comingsoon',
    component: ComingSoonComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gen1',
    component: Gen1Component
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    SvgComponent, 
    LogoButtonComponent, 
    ComingSoonComponent, AboutComponent, Gen1Component,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
