import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  messages: any;

  constructor(private dataService: DataService) { }

  // onCreate de toda la p vida
  ngOnInit(): void {
    console.log("INIT")
    //[IMPORTANT] we need to use ...suscribe() to actually get the inforation from the json
    //or we can use a private field to save the request info
    // this.dataService.getPosts()
    //   .subscribe(posts => {
    //     console.log(posts)
    //   });

    //[NOTE] If we use the suscribtion method we need to cancel it after its done otherwise is bad for performing
    this.messages = this.dataService.getPosts();
  }

  // [NOTE] Better to specify the event :typy in the Child Output than here, that is why = event:any
  listenChild(event: any) {
    console.log('clickPost() = ', event)
  }

}
