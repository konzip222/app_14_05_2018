
import { Component } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';
import { Title }     from '@angular/platform-browser';

interface TimerReportModel{
    Id: number;   
    IssueId: number;
    Issue: Issue;
    UserId: number;
    User: User;
    StartTime: Date;
    EndTime: Date;
}

interface Issue{
    Key :string;
    IssueName :string;  
}

interface User{
    UserId: number;
    EmailAddress: string;
    FullName: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  test = new Date();
  dateInputStart = new Date(this.test.getTime()-3600000);
  dateInputStop = new Date(this.test.getTime()-1600000);  
  newTaskName = "new task";

  inputObject = {
    initialDate : new Date(this.test.getTime()-3600000),
    taskName : "new task"
  };

  newUser = {
    UserId: 31,
    EmailAddress: "konzip22@o2.pl",
    FullName: "andrzejKowalski"
  }

  newIssue = {
    Key :"[ZM123]",
    IssueName :"new asewome long Issue"  
  }

  inputObjectNew = {
    Id: 123123,   
    IssueId: 12,
    Issue: this.newIssue,
    UserId: 33412321,
    User: this.newUser,
    StartTime: this.dateInputStart,
    EndTime: this.dateInputStop
  }
}