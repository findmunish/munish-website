import { Component, OnInit, Input } from '@angular/core';

import { imageObjInterface } from "../../../data-store/cardComponentInterface";
import { textObjInterface } from "../../../data-store/cardComponentInterface";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  @Input() bannerObj: {dispType: string, textObj: textObjInterface, imageObj: imageObjInterface};
  constructor() { }
  ngOnInit() { }
  getImage() {
    return `url(${this.bannerObj.imageObj.imageUrl})`;
  }
}