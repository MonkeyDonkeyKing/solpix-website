import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-button',
  templateUrl: './logo-button.component.html',
  styleUrls: ['./logo-button.component.css']
})
export class LogoButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate() { 
    var pathsToAnim = document.getElementById('PATHS');
    pathsToAnim.animate([{
      opacity: '0' },{
        opacity: '1'}],
        {
          duration: 2000,
          iterations: 1,
          easing: 'ease'
        });
    
  }

  pathOpacity(){
    var x = document.getElementById("PATHS").querySelectorAll("path");

    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      element.style.opacity = Math.random().toString();
    }
  }

  onClickLogo(){
    this.onAnimate();
    this.pathOpacity();
    setInterval(this.pathOpacity, 800); 
  }
}
