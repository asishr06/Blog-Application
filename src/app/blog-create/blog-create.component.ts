import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router}  from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService : BlogHttpService ,private _router:ActivatedRoute,private router :Router,public toastr:ToastrService ) {

    
  }

  public blogTitle :string;
  public blogDescription :string;
  public blogBody    :string;
  public blogCategory    :string;

  public possibleCategory =["Comedy","Drama","Action","Technology"];





 ngOnInit() {
  }

  public createBlog():any{

    let blogData = {

      title : this.blogTitle,
      description :this.blogDescription,
      blogBody : this.blogBody,
      category : this.blogCategory
 
    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data =>{

        console.log("Blog Created");
        console.log(data);
        this.toastr.success('Blog Created Successfully','success');
        setTimeout(()=>  {
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)

         

      },
      error =>{

        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.warning("some error occured","Error");
      }
   )

  }

}
