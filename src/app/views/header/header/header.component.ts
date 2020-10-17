import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ROUTE_LINKS } from '../../../data-store/routesData';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  @Output() openUrlRequest = new EventEmitter
  emitEvent(url) {
    this.openUrlRequest.emit(url)
  }
  onHome() {
    this.emitEvent(ROUTE_LINKS.HOME)
  }
  onDoors() {
    this.emitEvent(ROUTE_LINKS.DOORS)
  }
  onWindows() {
    this.emitEvent(ROUTE_LINKS.WINDOWS)
  }
  onRequestCostCalculation() {
    this.emitEvent(ROUTE_LINKS.REQ_COST_CALC)
  }
  onRequestQuote() {
    this.emitEvent(ROUTE_LINKS.REQ_QUOTE)
  }
  onContactUs() {
    this.emitEvent(ROUTE_LINKS.CONTACT)
  }
  onAboutUs() {
    this.emitEvent(ROUTE_LINKS.ABOUT)
  }
}