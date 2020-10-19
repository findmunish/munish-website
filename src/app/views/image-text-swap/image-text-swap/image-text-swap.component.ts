import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-text-swap",
  templateUrl: "./image-text-swap.component.html",
  styleUrls: ["./image-text-swap.component.css"]
})
export class ImageTextSwapComponent implements OnInit {
  @Input() cardImageObj;
  @Input() isHorizontalTransition;
  @Input() isVerticalTransition;

  constructor() {}
  ngOnInit() {}
}
