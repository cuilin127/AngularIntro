import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements AfterViewInit{
  parentMessage:string = "Message from root";
  @ViewChild(PostComponent) childComp: any;

  messageFromChild:string = '';
  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.messageFromChild = this.childComp.childMessage;
  }
}
