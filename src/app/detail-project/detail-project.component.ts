import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  routeData:any;

  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.routeData = params;
      console.log(params);
    });
  }

}
