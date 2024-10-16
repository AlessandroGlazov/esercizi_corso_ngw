import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
  imports: [CommonModule] 
import { AppComponent } from './../../app.component';

})
export class HelloWorldComponent {


  name:string='Alessandro';
  surname:string = "Glazov";
  age:number=19;
  hobby:string = "Music production, Coding, Singing, Cooking";
  msgscr: boolean = true
  isLoading: boolean = false;
  showText: boolean = false;
  fruits = ["mela", "banana", "arancia"];
  citta = 
  [ 
    {cap:1,nome:'Roma'},
    {cap:2,nome:'Palermo'},
    {cap:3,nome:'Milano'},
    {cap:4,nome:'Napoli'},
  ]

  persone =
   [
    { nomee: 'Alessandro', eta: 25 },
    { nomee: 'Giulia', eta: 30 },
    { nomee: 'Marco', eta: 22 },
    { nomee: 'Sara', eta: 28 }
  ];

  export class AppComponent {
  paesi: string[] = 
  ['Italia', 'Spagna', 'Francia', 'Germania'];


  prodotti=[
    {prodotto:'coca cola', prezzo:'0,99 euro'},
    {prodotto:'pepsi', prezzo:'0,80 euro'},
    {prodotto:'fanta', prezzo:'0,89 euro'},
    {prodotto:'icnusa', prezzo:'1,19 euro'},
]

  

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
