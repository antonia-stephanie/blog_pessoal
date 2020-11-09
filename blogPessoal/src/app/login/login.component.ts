import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userlogin } from '../model/Userlogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: Userlogin = new Userlogin
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp:Userlogin) =>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/feed'])
    })

  }
}
