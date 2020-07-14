import { Component, OnInit } from '@angular/core';
import { LoginAuntenticacionService } from "../servicios/login-auntenticacion.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos = {email: '', contrasena: ''}
  constructor(private auntenticar: LoginAuntenticacionService, private router: Router) { }

  ngOnInit(): void {
  }

  getUsuarios(): boolean {
    this.auntenticar.logeo(this.datos)
    .subscribe(res => {
      this.router.navigate(['/'])
      localStorage.setItem('token', res.token)
    })
    return false 
  }

}
