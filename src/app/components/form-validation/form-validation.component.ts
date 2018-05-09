import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../shared/employee.model';
import { DatabaseService } from '../../services/database.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
  providers :[DatabaseService]  
})
export class FormValidationComponent implements OnInit {

  constructor(private databaseService : DatabaseService) { }
  employeeList: Employee[];
  selectedEmployee: Employee = new Employee();  
  isTyping = [true, true, true, true, true];
  pathToDatabase = '/employees';

  ngOnInit(){   
    var x = this.databaseService.getData(this.pathToDatabase);
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onSubmit(newEmployee) {
    this.databaseService.insertData(this.pathToDatabase,newEmployee);  
    this.clearForm();
  }

  clearForm(){
    this.selectedEmployee = new Employee();
    this.isTyping = [true, true, true, true, true];
  }

  Typing(i,logic){
      this.isTyping[i] = logic;
  }
 
}
