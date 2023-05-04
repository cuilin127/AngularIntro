import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title:string = "List of post";
  @Input() fromParent!: string;
  childMessage:string = "from child message";
  constructor(){}

  ngOnInit(): void {
      
  }

}
