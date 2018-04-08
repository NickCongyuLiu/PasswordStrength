import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MaterialModule } from '../material.module';





@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})



export class PasswordComponent implements OnInit {
  password = '';
  message = 'Your message goes here';
  messages: string[]=[];

  color = 'warn';
  mode = 'determinate';
  value = 0;
  bufferValue = 0;






  constructor() {
    this.messages[0]="Your message goes here";





    // $('#inputPass').keyup(function(){
    //   console.log('riniam');
    //
    //   this.messages=[];
    //
    //   this.c_length();
    //   this.c_numberCnt();
    //   this.c_metaCnt();
    //   this.c_upperCnt();
    //   this.c_lowerCnt();
    //
    //   var inputElement = <HTMLInputElement>document.getElementById('#meter');
    //
    //   inputElement.value =this.messages.length.toString();
    //
    //   console.log(inputElement.value);
    //
    // });

  }

  onKey(event:any){

    this.color = 'warn';
    this.mode = 'determinate';

    this.password = event.target.value;

    this.messages = [];

    this.c_length();
    this.c_numberCnt();
    this.c_metaCnt();
    this.c_upperCnt();
    this.c_lowerCnt();

    this.value = (5-this.messages.length)*20;

    if(this.value==100){
      this.color = 'primary';
      this.mode ='query';
      document.getElementById('resultStatement').style.color="green";
      document.getElementById('resultStatement').style.fontWeight="bolder";

      this.messages.push('Congratulation! You password is strong enough');
    }

    if(this.value!=100){
      document.getElementById('resultStatement').style.color="red";
    }

  }


  checkPassword(password: string) {

    this.messages = [];

    this.c_length();
    this.c_numberCnt();
    this.c_metaCnt();
    this.c_upperCnt();
    this.c_lowerCnt();



    this.value = (5-this.messages.length)*20;

    if(this.value==100){
      this.color = 'primary';
      this.mode ='query';
      this.messages.push('You password is strong enough');
    }

  }



  c_length(): void {

    if ( this.password.length <= 8) {
      this.messages.push('The length of the password is too short \n');
    }else if( this.password.length>=20){
      this.messages.push('The length of the password is too long \n');
    }

  }


  c_numberCnt(): void {

    if(this.password.search(/\d/)==-1){
      this.messages.push('You need at least one number \n');
    }

  }

  c_metaCnt(): void {

    if(this.password.search(/[^a-zA-Z0-9]/) == -1){

      this.messages.push('You need at least one special character ');

    }



  }

  c_upperCnt(): void {

    if(this.password.search(/[A-Z]/) == -1){

      this.messages.push('You need at least one upperLetter ');

    }


  }

  c_lowerCnt(): void {

    if(this.password.search(/[a-z]/) == -1){

      this.messages.push('You need at least one lowerLetter ');

    }

  }

  resetPassword() {

    this.messages=[];
    this.messages[0]="password already been reset";
    this.password = '';
  }

  ngOnInit() {
    // console.log(this.message);
  }

}
