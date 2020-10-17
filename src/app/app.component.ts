import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTE_LINKS } from './data-store/routesData';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  routeLinks: any = ROUTE_LINKS;
  name = "Angular " + VERSION.major;
  constructor(private router: Router) {}
  urlType = ROUTE_LINKS.HOME;
  openRequestedUrl(urlRequested) {
    this.urlType = urlRequested;
    this.router.navigateByUrl(urlRequested);
  }
}