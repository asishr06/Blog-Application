import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute , Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

public currentBlog;

  constructor(private _route:ActivatedRoute , private route:Router,public blogService:BlogService) {
      console.log(" blog view constructor is called" );

   }


  ngOnInit(): void {
  console.log("blog view ngOnInot is called");

    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog =this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
    
  }
  ngOnDestroy(): void{
    console.log(" blog view ngOnDestroy called");

  }

}
