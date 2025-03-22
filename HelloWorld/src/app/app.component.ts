import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName='';
  errorMessage='';
  title='Hello from BridgeLabz';
  logoUrl= 'assets/images/bridgelabz_com_logo.jpg';
  websiteUrl= 'https://www.bridgelabz.com';
  isValid=true;

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.userName = input;
    this.isValid = /^[A-Z][a-zA-Z]{2,}$/.test(input); // Must start with uppercase and be at least 3 characters
  }
}

