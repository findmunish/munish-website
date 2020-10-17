import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// import { ROUTE_LINKS } from '../../../data-store/routesData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // routeLinks: any = ROUTE_LINKS;
  constructor(private router: Router) { }
  ngOnInit() { }
  // urlType = ROUTE_LINKS.HOME;
}