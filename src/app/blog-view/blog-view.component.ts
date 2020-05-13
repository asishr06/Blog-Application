import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute , Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy{

public currentBlog;

  constructor(private _route:ActivatedRoute , private router:Router,public blogService:BlogService,public blogHttpService:BlogHttpService,public toastr:ToastrService) {
      console.log(" blog view constructor is called" );

   }


  ngOnInit(): void {
  console.log("blog view ngOnInit is called");

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


  public deleteThisBlog(): any{

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log(data);
        this.toastr.success('Blog deleted succefully','success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },

      error =>{

        console.log("Some error occured")
        console.log(error.errorMessage);
        this.toastr.error('some error occured','error');
      }

    )
  }

  ngOnDestroy():void{

  }
}

