import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title:string = "List of post";
  @Input() fromParent!: string;
  childMessage:string = "from child message";
  outputChildMessage: string  = "message from child outpurt"
  @Output() messageEvent = new EventEmitter<string>();
  constructor(){}
  

  

  ngOnInit(): void {
      
  }
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

}
