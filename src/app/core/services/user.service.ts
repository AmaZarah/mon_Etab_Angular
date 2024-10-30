import { Injectable } from '@angular/core';
import { LocalStroageService } from './localStroage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService:LocalStroageService) { }
  isAuthenticate(){
    const token= this.localStorageService.getToken()
    if (token){
      return true;
    }
    return false;

  }

}
