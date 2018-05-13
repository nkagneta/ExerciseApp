import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public Tracker: TrackerService) {

    }

  ngOnInit() {
  }

}