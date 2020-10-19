import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-text-swap",
  templateUrl: "./image-text-swap.component.html",
  styleUrls: ["./image-text-swap.component.css"]
})
export class ImageTextSwapComponent implements OnInit {
  cardImageObj: any = {
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
  constructor() {}
  ngOnInit() {}
}
