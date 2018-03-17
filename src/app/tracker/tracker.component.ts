import { Component, OnInit } from '@angular/core';
import { Tracker } from '../models/tracker';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

    Model = new Tracker();
  constructor() { }

  ngOnInit() {
  }

}
