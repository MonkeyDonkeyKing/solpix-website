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


  constructor() { }

  ngOnInit(): void {

  }


}
