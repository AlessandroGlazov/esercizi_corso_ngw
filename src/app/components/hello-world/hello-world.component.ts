import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {


  name:string='Alessandro';
  surname:string = "Glazov";
  age:number=19;
  hobby:string = "Music production, Coding, Singing, Cooking";

saluta() {
  console.log("ciao")
}
 onClick() {


 }
}
