import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName;
  userPassword;
  userConformPassword;
  userDob;
  userAddress;

  signup(){
  if(this.userPassword = this.userConformPassword){
    console.log("Both Passwords are same");
    this.router.navigate(["/login"]);
  }
}
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
