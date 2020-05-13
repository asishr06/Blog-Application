//this is by default statement
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs =[];


  constructor(public blogHttpService: BlogHttpService) {
    console.log("Home Component constructor called");
  }



  ngOnInit(): void {

    console.log("Home Component OnInit called ");
    //this.allBlogs = this.blogHttpService.getAllBlogs();

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
    console.log(this.allBlogs);

  }

  ngOnDestroy(): void {

    console.log("home component destroyed.");

  }

}
