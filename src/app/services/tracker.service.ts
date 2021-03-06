import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/tracker';
import { Router } from '@angular/router';


@Injectable()
export class TrackerService {
  Me: User;
  token: string;
  pic: string;

  constructor(private http: Http, private _Messages: MessagesService, private _Router: Router) {
      
  }

  login(name: string, password: string){
      if(password == '123'){
          // User logs in
          this.Me = { Name: name, MyExercises: [] };
          this._Router.navigate(['/tracker']);
      }
  }

  oAuthLogin(name: string, token:string, pic: string){
    this.Me = { Name: name, MyExercises: [] };
    this.pic = pic;
    this.token = token;
    this._Router.navigate(['/tracker']);
}

}