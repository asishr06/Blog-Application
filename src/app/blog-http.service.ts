import { Injectable } from '@angular/core';
//importing http client to make the requests

import{HttpClient,HttpErrorResponse} from '@angular/common/http';

//importing observables
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  public allBlogs;
  public currentBlog;
  public baseUrl ='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'NmQ0ODkxMzc1ZjgzMWQ3MjRiZmEzMThlNzFlODBhMmQ1M2EzNzEzZTY3YTg1ZjhiYWQ2NDcwZmFlZmI2NWNlMjhiNjNkZjUxZGU4ZmJmMTI0YzYxZjZhMTZlZGY0MTI5MzFlMmJiMWU3YmMzNjk3OGNmMWYwM2JhNzU2NzE0NjUxOQ==';

  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");

   }

   public handleError(err:HttpErrorResponse){
     console.log("handle error with http");
     console.log(err.message);
     return Observable.throw(err.message);
}


   public getAllBlogs(): any{

    console.log("get all blog called");

    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
}
 

public getSingleBlogInformation(currentBlogId): any {

  let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
  return myResponse;
}

public createBlog(blogData): any{

  let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
  console.log(this.authToken);
  console.log(myResponse);
  return myResponse;

}

public editBlog(blogId,blogData):any{

  let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/edit'+'?authToken'+this.authToken,blogData);
  return myResponse;
}

public delete(blogId):any{
  let data={};
  let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/delete'+'?this.authToken'+this.authToken,data);
  return myResponse;
}





}
