import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authenticated: boolean = false;
  
  login(){
    this.authenticated = true;
  }

  logout(){
    this.authenticated = false;
  }

  isAuthenticated(){
    return this.authenticated;
  }
}