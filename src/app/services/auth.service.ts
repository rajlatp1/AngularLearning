import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  isRegistered(): boolean {
    if (localStorage.getItem('isRegistered') == "true") {      
      return true;      
   }
   return false;
  }
  
  logout():void{
    localStorage.setItem('isRegistered','false') ;
    this.router.navigate(['/signup']);
  }
}
