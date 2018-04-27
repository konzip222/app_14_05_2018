import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  isTyping = [true, true, true, true, true];
  Typing(i,logic){
      this.isTyping[i] = logic;
  }

  nameInput = "";
  surnameInput = "";
  phoneNumberInput = null;
  emailAdressInput = "";
  genderInput = "";
  constructor() { }

  ngOnInit() {
  }

}
