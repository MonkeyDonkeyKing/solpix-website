import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './logo.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMiddle(){
    console.log('click middle');
    var ids = (document.getElementsByTagName("path"));
    //var style = document.getElementById("svg927231").style.opacity = random.toString();

    for (let index = 0; index < ids.length; index++) {
      const element = ids[index];
      element.style.opacity = Math.random().toString();
      console.log(element + " done")
    }

  }
}
