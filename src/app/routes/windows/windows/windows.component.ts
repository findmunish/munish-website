import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-windows",
  templateUrl: "./windows.component.html",
  styleUrls: ["./windows.component.css"]
})
export class WindowsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  getCardImageObj() {
    return {
      imageObj: {
        imageUrl: "../../../../assets/images/slidingWindow.jpg"
      },
      title: {
        headerText: "Sliding Windows",
        bodyText: ""
      },
      desc: {
        headerText: "Description",
        bodyText:
          "These windows have sashes that slightly overlap each other, while moving on a fixed horizontal frame. These are best suited for residential and commercial spaces where space saving is a must. They offer convenience and space."
      }
    };
  }
}
