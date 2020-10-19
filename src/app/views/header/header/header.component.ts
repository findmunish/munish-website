import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { GET_ROUTING_LINK } from '../../../data-store/routesData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  @Output() openUrlRequest = new EventEmitter
  navToRouteType(strRouteType) {
    this.router.navigateByUrl(GET_ROUTING_LINK(strRouteType));
  }
}