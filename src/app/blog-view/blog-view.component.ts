import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute , Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

public currentBlog;

  constructor(private _route:ActivatedRoute , private route:Router,public blogService:BlogService,public blogHttpService:BlogHttpService) {
      console.log(" blog view constructor is called" );

   }


  ngOnInit(): void {
  console.log("blog view ngOnInot is called");

    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);


    this.currentBlog =this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data=> {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {

        console.log("some error occured");
        console.log(error.errorMessage);

      }

    )    
  }

}
