import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username=null;
  private password=null;

  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  ingresar(loginForm:any){
    console.log(this.username);
    console.log(this.password);
    localStorage.setItem('username', this.username);
    this._router.navigate(['t']);
  }
}
