import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Company } from '../../shared/company.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private databaseService : DatabaseService) { }
  company: Company = new Company();
  companyList: Company[];  
  pathToDatabase = '/company';  
  lat: number = 53.106896;
  lng: number = 23.193369;

  isTyping = [true, true, true, true, true, true, true];
  Typing(i,logic){
      this.isTyping[i] = logic;
  }

  ngOnInit() {
    var x = this.databaseService.getData(this.pathToDatabase);
    x.snapshotChanges().subscribe(item => {
      this.companyList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.companyList.push(y as Company);
      });
    });
  }

  onSubmit(companyUpdate) {
    this.databaseService.insertData(this.pathToDatabase,companyUpdate);  
    this.clearForm();
  }

  clearForm(){
    this.company = new Company();
    this.isTyping = [true, true, true, true, true, true, true];
  }
}
