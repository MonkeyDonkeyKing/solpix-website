import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SvgComponent } from './components/svg/svg.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BackgroundComponent } from './components/background/background.component';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SvgComponent, ButtonsComponent, BackgroundComponent, LogoButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
