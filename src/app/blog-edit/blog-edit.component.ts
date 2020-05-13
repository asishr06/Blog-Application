import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;

  public possibleCategory =["Comedy","Drama","Action","Technology"];

  constructor(private _route: ActivatedRoute, private router: Router, private blogService: BlogService, private blogHttpService: BlogHttpService, public toastr: ToastrService) { }

  ngOnInit() :void {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
      console.log(myBlogId);
      this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current Blog is")
        console.log(this.currentBlog);
      },
      error => {

        console.log("some error occured");
        console.log(error.errorMessage);

      }

    )


  }//end of on init



  public editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Edited successfully', 'success');
        console.log(this.router.navigate(['/blog'], this.currentBlog.blogId));
        setTimeout(() => {
          this.router.navigate(['/blog'], this.currentBlog.blogId);
        }, 1000)
      },
  
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.warning('some error occured', 'error');
      }
    )
  }

}

