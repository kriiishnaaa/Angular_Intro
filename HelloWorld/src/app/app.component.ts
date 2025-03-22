import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName='';
  title='Hello from BridgeLabz';
  logoUrl= 'assets/images/bridgelabz_com_logo.jpg';
  websiteUrl= 'https://www.bridgelabz.com';
  onInputChange(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
}
