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
  windowsData: any = WINDOWS_CARD_DATA;
  glassesData: any = GLASSES_CARD_DATA;
  getWindowImagesObj(index) {
    return this.windowsData[index];
  }
  getGlassImagesObj(index) {
    return this.glassesData[index];
  }
}
