import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sommatore',
  standalone: true,
  templateUrl: './sommatore.component.html',
  styleUrls: ['./sommatore.component.css'],
  imports: [FormsModule]
})
export class SommatoreComponent {
  num1: number = 0;
  num2: number = 0;
  somma: number = 0;

  calcolaSomma(): void {
    this.somma = this.num1 + this.num2;
  }
}
