import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svg',
  templateUrl: './Version2.1.svg',
  styleUrls: ['./svg.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SvgComponent implements OnInit {

  isClickedAlready: boolean = false;
  isCompleted: boolean = false;
  isOpen: boolean = false;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  openMenu(url: string) {
    window.open(url, "_blank");
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    var x = document.getElementById("PATHS").querySelectorAll("path");
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      element.style.opacity = '0';
      element.style.transition = 'all 1s ease';
    }
    var y = document.getElementById("SOCIALS").querySelectorAll("path");
    for (let index = 0; index < y.length; index++) {
      const element = y[index];
      element.style.opacity = '0';
      element.style.transition = 'all 1s ease';
    }
    var y1 = document.getElementById("SOCIALS").querySelectorAll("text");
    for (let index = 0; index < y1.length; index++) {
      const element = y1[index];
      element.style.opacity = '0';
      element.style.transition = 'all 1s ease';
    }

    var z = document.getElementById("LOGO").querySelectorAll("path");
    for (let index = 0; index < z.length; index++) {
      const element = z[index];
      element.style.opacity = '0';
      element.style.fill = '#00CCFF';
      element.style.transition = 'all 2s ease-in';
    }
    var p = document.getElementById("POWER").querySelectorAll("path");
    for (let index = 0; index < p.length; index++) {
      const element = p[index];
      element.style.color = '#f7b215';
      element.style.transition = 'all 2s ease';
    }

    var pb = document.getElementById("POWERBORDERNEW").querySelectorAll("path");
    for (let index = 0; index < pb.length; index++) {
      const element = pb[index];
      element.style.color = '#f7b215';
      element.style.transition = 'all 2s ease';
    }
  }

  clickTeam() {
    this.router.navigate(['/team']);
    this.isOpen = false;

  }
  clickMenuAbout() {
    this.router.navigate(['/about']);
    this.isOpen = false;

  }
  clickNFT() {
    this.router.navigate(['/nft']);
    this.isOpen = false;
  }
  clickWhitePaper() {
    this.router.navigate(['/whitepaper']);
    this.isOpen = false;
  }

  showSocials() {
    if (!this.isClickedAlready) {
      var x = document.getElementById("SOCIALS").querySelectorAll("path");
      for (let index = 0; index < x.length; index++) {
        const element = x[index];
        element.style.opacity = '1';
      }
      var y1 = document.getElementById("SOCIALS").querySelectorAll("text");
      for (let index = 0; index < y1.length; index++) {
        const element = y1[index];
        element.style.transition = 'all 1s ease';
        element.style.opacity = '1';
      }
      this.isClickedAlready = true;
    }
  }

  showLogo() {
    var y = document.getElementById("POWER").querySelectorAll("path");
    for (let index = 0; index < y.length; index++) {
      const element = y[index];
      element.style.opacity = '0';
    }
    var x = document.getElementById("LOGO").querySelectorAll("path");
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      element.style.opacity = '1';
    }

  }

  changeButtonToBlue() {
    var z = document.getElementById("POWER").querySelectorAll("path");
    for (let index = 0; index < z.length; index++) {
      const element = z[index];
      element.style.fill = '#00CCFF';
    }

    var pb = document.getElementById("POWERBORDERNEW").querySelectorAll("path");
    for (let index = 0; index < pb.length; index++) {
      const element = pb[index];
      element.style.opacity = '0';

    }
  }

  onAnimatePaths() {
    var pathsToAnim = document.getElementById('PATHS');
    pathsToAnim.animate([{
      opacity: '0'
    }, {
      opacity: '1'
    }],
      {
        duration: 3000,
        iterations: 1,
        easing: 'ease'
      });
  }

  pathOpacityAnimation() {
    var x = document.getElementById("PATHS").querySelectorAll("path");
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      element.style.opacity = Math.random().toString();
    }
  }

  onClickLogo() {
    if (!this.isCompleted) {
      this.isCompleted = true;

      this.changeButtonToBlue();


      this.onAnimatePaths();
      this.pathOpacityAnimation();
      setInterval(this.pathOpacityAnimation, 900);

      setTimeout(() => {
        this.showSocials();
        this.showLogo();

      }, 5000);


    }
  }
}
