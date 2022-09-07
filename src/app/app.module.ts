import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { SvgComponent } from './components/svg/svg.component';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { TeamComponent } from './components/team/team.component';
import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { NFTComponent } from './components/nft/nft.component';
import { WhitePaperComponent } from './components/whitepaper/whitepaper.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCheck, faCoffee, faCommentAlt, faEllipsisH, faEnvelope, faExclamation, faInfo, faLightbulb, faLink, faMinus, faPrint, fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr, faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faLine } from '@fortawesome/free-brands-svg-icons';
import { SolpixComponent } from './components/solpix/solpix.component';
import { BubbleComponent } from './components/bubble/bubble.component';



const ROUTES = [
  {
    path: '',
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'nft',
    component: NFTComponent
  },
  {
    path: 'whitepaper',
    component: WhitePaperComponent
  },
  {
    path: 'solpix',
    component: SolpixComponent
  }
];

const icons = [
  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,
  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faCommentAlt, faBook, faLine,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLightbulb, faCoffee, faInfo
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatTooltipModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    BubbleComponent,
    LogoButtonComponent,
    NFTComponent,
    TeamComponent,
    SolpixComponent,
    SvgComponent,
    WhitePaperComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(...icons);
  }
}
