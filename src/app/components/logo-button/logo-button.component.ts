import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { delay, timeout } from 'rxjs';

@Component({
  selector: 'app-logo-button',
  templateUrl: './logo-button.component.html',
  styleUrls: ['./logo-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoButtonComponent implements OnInit {

  isClickedAlready: boolean = false;
  isCompleted: boolean = false;

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
      element.style.transition = 'all 5s ease';
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

    var pb = document.getElementById("POWERBORDER").querySelectorAll("path");
    for (let index = 0; index < pb.length; index++) {
      const element = pb[index];
      element.style.color = '#f7b215';
      element.style.transition = 'all 2s ease';
    }
  }

  clickMenuComingSoon() {
    this.router.navigate(['/comingsoon']);
  }
  clickMenuAbout() {
    this.router.navigate(['/about']);
  }
  clickMenuGen1() {
    this.router.navigate(['/gen1']);
  }

  showSocials() {
    if (!this.isClickedAlready) {
      var x = document.getElementById("SOCIALS").querySelectorAll("path");
      for (let index = 0; index < x.length; index++) {
        const element = x[index];
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
      }, 5000);

      setTimeout(() => {
        this.showLogo();
      }, 5000);



      // setTimeout(() => {
      //   this.showSocials();

      //   setTimeout(() => {
      //     this.showLogo();
      //   }, 1000);

      // }, 1000);



    }
  }
}
