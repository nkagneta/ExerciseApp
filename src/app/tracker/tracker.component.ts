import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Tracker, User, Exercise } from '../models/tracker';
import { MessagesService } from '../services/messages.service';
import { TrackerService } from '../services/tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

    Model = new Tracker();
    Me: User;

    private _api = "http://localhost:8080/tracker"; //works for dev server, change to "/tracker" for cloud hosting?

  constructor(
      private http: Http,
      private _Messages: MessagesService, 
      private _Tracker: TrackerService, 
      private _Router: Router
    ) {
        this.Me = _Tracker.Me;
        if(!this.Me){
            _Router.navigate(['/login']);
        }
        this.join(this.Me.Name);

    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  submitExercise(e: MouseEvent, text: string){
    e.preventDefault();

    this._Messages.Messages.push({ Text: 'Exercise Added: ' + text, Type: 'success'})
    this.http.post(this._api + "/exercises", { Text: text, PlayerId: this.Me.Name })
        .subscribe(data=> {
        }, err=> {
            console.log(err);
        });
  }

  chooseExercise(e: MouseEvent, exercise: Exercise){
    e.preventDefault();
    this.http.post(this._api + "/exercises/choose", { Text: exercise.Text, PlayerId: this.Me.Name })
        .subscribe(data=> {
        }, err=> {
            console.log(err);
        });
  }

  join(name: string){
    this._Messages.Messages.push({ Text: 'You\'ve opened the tracker! Welcome ' + name + '.', Type: 'success'})
    this.http.get(this._api + "/exercises", { params : { playerId: name } })
    .subscribe(data=> this.Me.MyExercises = data.json() )
  }

  MyPlayedExercise = () => this.Model.PlayedExercises.find( x => x.PlayerId == this.Me.Name );
}