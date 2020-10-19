import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  mobileNum = "my mobile n";
  ngOnInit() {}
  navToRouteType(strRouteType) {
    this.router.navigateByUrl(GET_ROUTING_LINK(strRouteType));
  }
  isMobile() {
    return false;
  }
  onClickWhatsapp() {
    let apilink = "https://";
    apilink += this.isMobile() ? "api" : "web";
    apilink +=
      ".whatsapp.com/send?phone=" + this.mobileNum + "&text=" + encodeURI("");
    window.open(apilink, "_blank");
  }
}
