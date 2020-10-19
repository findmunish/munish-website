import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { WINDOWS_CARD_DATA } from "../windowsCardData";
import { GLASSES_CARD_DATA } from "../glassesCardData";

@Component({
  selector: "app-windows",
  templateUrl: "./windows.component.html",
  styleUrls: ["./windows.component.css"]
})
export class WindowsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  getWindowImagesObj(index) {
    return WINDOWS_CARD_DATA[index];
  }
  getGlassImagesObj(index) {
    return GLASSES_CARD_DATA[index];
  }
}

