import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
  imports: [CommonModule] 

})
export class HelloWorldComponent {


  name:string='Alessandro';
  surname:string = "Glazov";
  age:number=19;
  hobby:string = "Music production, Coding, Singing, Cooking";
  msgscr: boolean = true
  isLoading: boolean = false;
  showText: boolean = false;


saluta() {
  console.log("ciao")
}
 onClick() {


 }

 ActMsgScr(): void { 
  this.msgscr = !this.msgscr;
}

toggleShow(): void {
  this.isLoading = true;
  this.showText = false;

  
  setTimeout(() => {
    this.isLoading = false;
    this.showText = true; 
  }, 3000); 
}

toggleMsgScr(): void {
  this.msgscr = !this.msgscr;
}

}
