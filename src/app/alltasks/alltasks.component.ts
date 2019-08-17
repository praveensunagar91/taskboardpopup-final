import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { status } from './status';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  taskId="";
  title="";
  dueDate="";
  description="";
  priority="";
  assignedTo= "";
  assignedDate="";
  comments= "";
  status="";
  updateditem;

  arr:Task[] = [
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','todo')),
    (new Task('2','Surgical','08/13/2019','Surgical request ','low','Kiran','08/10/2019','work with the team','in progress')),
    (new Task('3','Surgical','08/13/2019','Surgical strike','low','Kiran','08/10/2019','work with the team','development completed')),
    (new Task('4','Surgical','08/13/2019','Surgical ','High','Kiran','08/10/2019','work with the team','todo')),
    (new Task('5','Surgical','08/13/2019','Surgical controll','High','Kiran','08/10/2019','work with the team','QA progress')),
    (new Task('6','Surgical','08/13/2019','Surgical request control','High','Kiran','08/10/2019','work with the team','system testing')),
    (new Task('7','Surgical','08/13/2019','Surgical request dashboard control','High','Kiran','08/10/2019','work with the team','system testing completed')),


  ];

  arr1:status[]=[

    new status(1,'todo'),
    new status(2,'in progress'),
    new status(3,'development'),
    new status(4,'QA progress'),
    new status(5,'system testing'),
    new status(6,'system testing completed')
  ];

  // inpro:Task[]=[];
  // dev:Task[]=[];
  // readyforQA:Task[]=[];
  // readyforST:Task[]=[];
  // Stcomplete:Task[]=[];


  constructor() { }

  ngOnInit() {
  }

  EditItem(i) {
    this.taskId = this.arr[i].taskId ;
    this.title = this.arr[i].title ;
    this.dueDate= this.arr[i].dueDate ;
    this.description = this.arr[i].description ;
    this.priority= this.arr[i].priority ;
    this.assignedTo= this.arr[i].assignedTo ;
    this.assignedDate= this.arr[i].assignedDate ;
    this.comments= this.arr[i].comments ;
    this.status= this.arr[i].status ;
    this.updateditem = i;
  }


  UpdateItem(){
    let data=this.updateditem;
     for(let i=0;i<this.arr.length;i++){
       if(i==data){
          this.arr[i].taskId=this.taskId;
          this.arr[i].title=this.title;
          this.arr[i].dueDate=this.dueDate;
          this.arr[i].description=this.description;
          this.arr[i].priority=this.priority;
          this.arr[i].assignedTo=this.assignedTo;
          this.arr[i].assignedDate=this.assignedDate;
          this.arr[i].comments=this.comments;
          this.arr[i].status=this.status;


          this.taskId='';
          this.title='';
          this.dueDate='';
          this.description='';
          this.priority='';
          this.assignedTo='';
          this.assignedDate='';
          this.comments='';
          this.status='';

          alert("updated successfully");
       }
     }
  }
}
  // modo(value: string) {
  //   switch(value) {
  //     case "mod2":
  //       this.inpro.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
  //       // this.arr.splice(this.arr.indexOf(),1);

  //       break;
  //     case "mod3":
  //       this.dev.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
  //     break;
  //     case "mod4":
  //       this.readyforQA.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
  //        break;

  //        case "mod5":
  //       this.readyforST.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
  //        break;

  //        case "mod6":
  //       this.Stcomplete.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
  //        break;
  //   }
  // }



