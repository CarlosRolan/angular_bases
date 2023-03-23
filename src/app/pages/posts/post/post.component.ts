import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('post_rename') postInfo: any;
  // [IMPORTANT] the parent CAN use this method the child CANNOT
  @Output() clickPost = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log(this.postInfo.id);
    // [IMPORTANT]  emit( "parent will recieve this" )
    this.clickPost.emit(this.postInfo.id)
  }



}
