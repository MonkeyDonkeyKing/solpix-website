import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-button',
  templateUrl: './logo-button.component.html',
  styleUrls: ['./logo-button.component.css']
})
export class LogoButtonComponent implements OnInit {

  isClickedAlready: boolean = false;
  isCompleted: boolean = false;

  constructor() { }



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

    var z = document.getElementById("LOGO").querySelectorAll("path");  
    for (let index = 0; index < z.length; index++) {
      const element = z[index];
      element.style.opacity = '0';
      element.style.transition = 'all 1s ease-in';
    }

    var p = document.getElementById("POWER").querySelectorAll("path");  
    for (let index = 0; index < p.length; index++) {
      const element = p[index];
      element.style.color = '#ffd42a';
      element.style.transition = 'all 1s ease';
    }

  }

  showSocials() {
    if (!this.isClickedAlready) {
      var x = document.getElementById("SOCIALS").querySelectorAll("path");

      for (let index = 0; index < x.length; index++) {
        const element = x[index];
        element.style.transition = 'all 1s ease';
        element.style.opacity = '1';
      }

      this.isClickedAlready = true;
      setTimeout( () => {
        this.showLogo();
      },3000)

    }
  }

  showLogo(){
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

    setTimeout( () => {
      var z = document.getElementById("LOGO").querySelectorAll("path");
      for (let index = 0; index < z.length; index++) {
        const element = z[index];
        element.style.fill = '#00CCFF';
      }
      this.isCompleted = true;
    },2000)
  }

  onAnimatePaths() { 
    var pathsToAnim = document.getElementById('PATHS');
    pathsToAnim.animate([{
      opacity: '0' },{
        opacity: '1'}],
        {
          duration: 3000,
          iterations: 1,
          easing: 'ease'
        });
    var z = document.getElementById("POWER").querySelectorAll("path");
    for (let index = 0; index < z.length; index++) {
      const element = z[index];
      element.style.fill = '#00CCFF';
    }     
  }

  pathOpacity(){
    var x = document.getElementById("PATHS").querySelectorAll("path");
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      element.style.opacity = Math.random().toString();
    }
  }

  onClickLogo(){

    if(!this.isCompleted){
      this.onAnimatePaths();
      this.pathOpacity();
      this.showSocials();
      setInterval(this.pathOpacity, 900); 
    }

  }
}
