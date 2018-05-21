import { Component, OnInit, Input, Inject  } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

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

interface dataInput{
    initialDate?: Date;
    taskName?: string;
};

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit {

/*  @Input() 
  private initialDateInput: Date;
  @Input() 
  private taskName: string;  
*/

  @Input()
  private dataInput: TimerReportModel;

  public constructor(@Inject(DOCUMENT) private _document: HTMLDocument, private titleService: Title) {
      
  }

  currentDate = new Date();
  timeResult: string;  
  tooltipHidden = true;

  testArray = [1,2,3,4,5,6,7,8,9,10];
  resultSum = 0;
  resultSum2 = 0;

  ngOnInit() {
    this.changeArrayValue();
    this.checkInputs(this.dataInput.StartTime,this.dataInput.Issue.IssueName);    
    setInterval(() => {
      this.updateTime(this.dataInput.StartTime);
    }, 1000);
    setInterval(() => {
      this.addTooltipFuntions();
    }, 2000);      
  }

  updateTime(initialDate){
    this.currentDate = new Date();
    let currentDateMilliSeconds = this.currentDate.getTime();
    let initialDateMilliSeconds = initialDate.getTime();
    let timeGoneMilliSeconds = currentDateMilliSeconds - initialDateMilliSeconds;
    this.timeResult = this.convertMillisecondsToClockTime(timeGoneMilliSeconds);
    this.changeImage(timeGoneMilliSeconds);    
    this.titleService.setTitle((this.timeResult));    
  }

  convertMillisecondsToClockTime(timeInMilliSeconds){
    let time = timeInMilliSeconds;
    let hours = Math.floor(time/3600000);
    time = time-hours*3600000;
    let minutes = Math.floor(time/60000);
    time = time-minutes*60000;
    let seconds = Math.floor(time/1000);
    let resultString = this.createResultString(hours,minutes,seconds);
    return resultString;
  }

  createResultString(hours,minutes,seconds){
    let resultString = "";
    if(hours > 9){
      resultString += hours+":";
    }
    else{
      resultString += "0"+hours+":";
    }
    if(minutes > 9){
      resultString += minutes+":";
    }
    else{
      resultString += "0"+minutes+":";
    }
    if(seconds > 9){
      resultString += seconds;
    }
    else{
      resultString += "0"+seconds;
    }        
    return resultString;
  }

  changeImage(timeInMilliSeconds){
    if(timeInMilliSeconds > 7200000){
      this._document.getElementById('appFavicon').setAttribute('href', 'https://orig00.deviantart.net/2563/f/2016/226/4/d/angry_by_kippy_kip-daduhno.png');
    }
    else if(timeInMilliSeconds > 3600000){
      this._document.getElementById('appFavicon').setAttribute('href', 'data:image/jpeg;base64,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');
      // dziala remove
     // this._document.getElementById('iconTest').classList.add("greenColor"); fa-pause
    // this._document.getElementById('iconTest').classList.remove("fa-play","greenColor");
    // this._document.getElementById('iconTest').classList.add("fa-pause","blackColor");     
    }
    else{
      this._document.getElementById('appFavicon').setAttribute('href', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Happy-emote.svg/2000px-Happy-emote.svg.png');
    }
  }

  checkInputs(dateInput,taskName){
      if(dateInput === undefined){
        this.titleService.setTitle("dateInput is undefined");
      }
      if(taskName === undefined){
        this.dataInput.Issue.IssueName = "Task name is undefined";
      }
  }

  showTooltip(event: MouseEvent){
    if(this.tooltipHidden){
      let tooltip = this._document.getElementById('tooltip');
      tooltip.style.left = event.clientX + this._document.documentElement.scrollLeft + 15 + "px";
      tooltip.style.top = event.clientY + this._document.documentElement.scrollTop - 15 + "px";
      tooltip.style.display = "block";
      tooltip.style.visibility = "visible";           
      this.tooltipHidden = false;      
    }     
  }

  hideTooltip(){
    this._document.getElementById('tooltip').style.visibility = "hidden";
    this.tooltipHidden = true;     
  }

  addTooltipFuntions(){
    let contBox = this._document.getElementById('contBox');
    let lastDisplayedChild = this._document.getElementById(this.getLastDisplayedChildId(contBox));
        lastDisplayedChild.addEventListener("mouseleave", () => {
        this.hideTooltip();
    });
    lastDisplayedChild.addEventListener("mouseover",(event: MouseEvent) =>{
      this.showTooltip(event);
    });

    let x = [1,2,3];
    
    for(let i =0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }

    let goodFn =  element => {let v = element * element; return v *2;}
   // x.forEach((kuubar, index) => console.log(kuubar));
    let y = x.map( goodFn );
    let sum = x.reduce((prev, curr, currIndex) => currIndex < 2 ? prev + curr : prev, -1);
    x.filter(foo => foo > 2);
  
    /*
    lastDisplayedChild.addEventListener("mouseleave", function(){
        this.hideTooltip();
    }.bind(this));
    */
    /*
    lastDisplayedChild.addEventListener("mouseover",function(event: MouseEvent){
      this.showTooltip(event); {let result = element * element; return result}
    }.bind(this));   */ 
  }

  changeArrayValue(){
    let squareEvenNumbers = element => !(element%2) ? element * element : element;
    let getTwoDigitNumbers = element => element > 9;
    let sumAllNumbers = element =>{this.resultSum2 += element};
    this.testArray = this.testArray.map(squareEvenNumbers).filter(getTwoDigitNumbers);
    this.resultSum = this.testArray.reduce((prev, curr, currIndex) => prev + curr, 0);
    this.testArray.forEach(sumAllNumbers);
  }

  getLastDisplayedChildId(parent){
    for(let i = (parent.children.length-1); i >= 0; i--){
      let child = parent.children[i];
      if(!(window.getComputedStyle(document.querySelector("#"+child.id)).display=="none")){
        return child.id;
      }
    }
  }

}