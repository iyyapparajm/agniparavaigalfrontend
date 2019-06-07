import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 public userName;
 public userPassword;
 public resp;
 url = "http://localhost:8080/createdb";
login(){
  console.log("Login Clicked");
 if(this.userName = "hcl" && this.userPassword == "password"){
   console.log("logged in succesfully!!");
   this.router.navigate(["dashboard"]);
 }

 this.httpClient.get(this.url)
  .subscribe((res)=>{
    this.resp = res;
    console.log(this.resp);
  })
}

  constructor(public router: Router, private httpClient: HttpClient) { 
  }
 
  ngOnInit() {
  }

   

}
