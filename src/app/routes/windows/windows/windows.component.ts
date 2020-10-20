import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { textObjInterface } from "../../../data-store/cardComponentInterface";
import { WINDOWS_CARD_DATA } from "../windowsCardData";
import { GLASSES_CARD_DATA } from "../glassesCardData";

@Component({
  selector: "app-windows",
  templateUrl: "./windows.component.html",
  styleUrls: ["./windows.component.css"]
})

export class WindowsComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }
  getWindowImagesObj(index) {
    return WINDOWS_CARD_DATA[index];
  }
  getGlassImagesObj(index) {
    return GLASSES_CARD_DATA[index];
  }
  bannerObjTop: textObjInterface = {
    headerText: "PRODUCT - WINDOWS",
    bodyText: "",
    fontColor: "",
    fontSize: ""
  };
  bannerObj: textObjInterface = {
    headerText: "UNDERSTANDING WINDOWS",
    bodyText: "A window is defined as an opening in the wall above the floor level, whose traditional function is to provide natural light, ventilation and vision. With advancements in technology the role of a window has broadened to include insulation against outside noise, protection from storms, prevent rain water seepage and reduce rising energy costs. It also breaks the monotony of the walls and adds to the overall aesthetics of your home.\nWindows come in various shapes and styles, and the right kind of window can change the look of your room, home or office. Choosing the right type of window for a particular location can be quite intimidating given the different styles, features and materials available in the market today. Here are a few things you need to know when you plan to replace those old, creaky windows.",
    fontColor: "",
    fontSize: ""
  };
  getImageLink() {
    return 'https://fantastic-windows.netlify.app/assets/images/banner1.png';
  }
}