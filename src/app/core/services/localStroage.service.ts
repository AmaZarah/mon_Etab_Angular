import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStroageService {

  public accessToken= "token";

  constructor() { }

  getToken(){
   return localStorage.getItem(this.accessToken);

  }

  saveToken(token:string){
    return localStorage.setItem(this.accessToken, token);


  }

  destroyToken(){
    localStorage.removeItem(this.accessToken);

  }

}
