import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  gandalf: string = 'gandalfontheblockchain#9914';
  dekar: string = 'Dekar#2894';

  constructor() { }

  ngOnInit(): void {
  }

  faTwitter = faTwitter;

}
