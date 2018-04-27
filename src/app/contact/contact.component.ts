import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 53.106896;
  lng: number = 23.193369;
  companyName = "Company Name";
  companyCity = "Białystok";
  companyCityCode = "15-197";
  companyPhoneNumber = 212123123;
  companyEmailAdress = "companyEmail@gmail.com";

  companyNameInput = "";
  companyCityInput = "";
  companyCityCodeInput = "";
  companyPhoneNumberInput = null;
  companyEmailAdressInput = "";
  companyLatitudeInput = null;
  companyLongitudeInput = null;

  isTyping = [true, true, true, true, true, true, true];
  Typing(i,logic){
      this.isTyping[i] = logic;
  }

  constructor() { }

  ngOnInit() {

  }

  updateCompanyData(newCompanyName, newCompanyCity, newCompanyCityCode, newCompanyPhoneNumber, newCompanyEmailAdress, newLatitude, newLongitude){
    this.companyName = newCompanyName;
    this.companyCity = newCompanyCity;
    this.companyCityCode = newCompanyCityCode;
    this.companyPhoneNumber = newCompanyPhoneNumber;
    this.companyEmailAdress = newCompanyEmailAdress;
    if(newLatitude != null && newLongitude != null){
      this.lat = newLatitude;
      this.lng = newLongitude;
    }
  }

}
