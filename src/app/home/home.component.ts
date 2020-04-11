//this is by default statement
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs;


  constructor(public blogService:BlogService) {
    console.log("Home Component constructor called");
   }

  ngOnInit(): void {

    console.log("Home Component OnInit called ");
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);

  }

  ngOnDestroy():void {

    console.log("home component destroyed.");

  }

}
