import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginAuntenticacionService {

  private URL = 'http://localhost:3500'
  constructor(private http: HttpClient, private router: Router) { }

  logeo(datos){
    return this.http.post<any>(this.URL + '/login', datos)
  }

  registro(datos){
    return this.http.post<any>(this.URL + '/nuevo_usuario', datos)
  }
  
  token(){
    return !!localStorage.getItem('token')
  }

  valorToken(){
    return localStorage.getItem('token')
  }

  cerrarSesion(){
    localStorage.removeItem('token')
    return this.router.navigate(['/login'])
  }

}
