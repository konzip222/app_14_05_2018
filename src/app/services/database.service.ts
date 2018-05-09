import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from '../shared/employee.model';

@Injectable()
export class DatabaseService {

  constructor(private firebase :AngularFireDatabase ) { }
  employeeList: AngularFireList<any>;  
  
  getData(path){
    this.employeeList = this.firebase.list(path);    
    return this.employeeList;
  }
 
  insertData(path,dataToInsert){
    this.firebase.list(path).push(dataToInsert);
  }
 
}
