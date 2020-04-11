import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


    //declare dummy blog variable 

    public allBlogs = [
      {
          "blogId":"1",
          "lastModified":"2020-04-10T06:20:47.85Z",
          "created":"2020-04-10T06:30:47.85Z",
          "tags":[],
          "author":"Admin",
          "category":"Comedy",
          "isPublished":true,
          "views":0,
          "bodyHtml":" this is the blog body ",
          "description":" this is blog 1 description ",
          "title":"This is blog 1"
      },
  
      {
        "blogId":"2",
        "lastModified":"2020-04-10T06:40:47.85Z",
        "created":"2020-04-10T06:50:47.85Z",
        "tags":[],
        "author":"Admin",
        "category":"Comedy",
        "isPublished":true,
        "views":0,
        "bodyHtml":"<h1>this is the big tet</h1> <p>this is small text </p> ",
        "description":" this is example of blog 2 and this is edited ",
        "title":"This is a example blog "
      },
  
      {
        "blogId":"3",
        "lastModified":"2020-04-10T06:55:47.85Z",
        "created":"2020-04-10T07:30:47.85Z",
        "tags":[],
        "author":"Admin",
        "category":"Comedy",
        "isPublished":true,
        "views":0,
        "bodyHtml":" this is the blog  3 body ",
        "description":" this is blog 3 description ",
        "title":"This is blog 3"
  
  
  
  
  
      }
    ]

    public currentBlog;


    
    constructor() { 

      console.log("service constructor is called");
    }

    //method to return all the blogd
      public getAllBlogs():any{

        return this.allBlogs;

      }

      public getSingleBlogInformation(currentBlogId): any {
        //using for loop here from typeScript
        //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    
        for(let blog of this.allBlogs){
          if(blog.blogId == currentBlogId){
          this.currentBlog =blog;
        }
      }
      console.log(this.currentBlog);
      return this.currentBlog;

    }
    

  
}
