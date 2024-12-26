import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router service

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  constructor(private router: Router) {}

  // Method to navigate to the game page
  startGame() {
    this.router.navigate(['/game']);
  }
}
