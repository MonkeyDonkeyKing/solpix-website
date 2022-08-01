import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons-only.svg',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onClickMiddleButton(){
  //   console.log('click middle');
  //   var ids = (document.getElementsByTagName("path"));

  //   for (let index = 0; index < ids.length; index++) {
  //     const element = ids[index];
      

  //     if(element.id === 'path2*'){
  //       element.style.opacity = Math.random().toString();
  //     }
      
  //   }
  // }

  onClickMiddleButton(){
    console.log('click middle');
    var ids = (document.getElementsByTagName("path"));

    for (let index = 0; index < ids.length; index++) {
      const element = ids[index];

      console.log(element.id);
      element.style.opacity = Math.random().toString();
      
      
    }

  }

//   idsLike(id:string){
//     var nodes= document.body.getElementsByTagName('*'),
//     L= nodes.length, A= [], temp: string | string[];
//     while(L){
//         temp= nodes[--L].id || '';
//         if(temp.indexOf(id)== 0) A.push(temp);
//     }
//     return A;
// }

}
