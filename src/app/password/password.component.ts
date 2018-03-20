import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {
  password = '';
  message = 'Your message goes here';
  messages: string[];

  constructor() { }

  checkPassword(password: string) {
    console.log('password', this.password);
  }

  c_length(): void {
    if ( this.password.length <= 1) {
      this.messages.push('The length of the password is too short');
    }
  }

  c_numberCnt(): void {

  }

  c_metaCnt(): void {

  }

  c_upperCnt(): void {

  }

  c_lowerCnt(): void {

  }

  resetPassword() {
    this.password = '';
  }

  ngOnInit() {
  }

}
