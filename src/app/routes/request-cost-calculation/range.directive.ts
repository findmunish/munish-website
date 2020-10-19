import { Directive, ElementRef, OnInit, Renderer2, Input, } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as ranges from './ranges';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective implements OnInit {
  @Input('rangeType')rangeType;
  position = 0;
  currentValue = 0;
  values = [];
  constructor(private elementRef: ElementRef, 
              private renderer: Renderer2, 
              private control : NgControl) { }
  ngOnInit() {
    this.values = ranges[this.rangeType];

    const range = this.renderer.createElement('input');
    this.renderer.setAttribute(range,'type','range');
    this.renderer.setAttribute(range,'min','0');
    this.renderer.setAttribute(range,'max',(this.values.length-1).toString());
    this.renderer.addClass(range,'slider');
    this.renderer.setAttribute(range,'value',this.position.toString());

    this.elementRef.nativeElement.style = 'display:none';
    this.renderer.appendChild(this.renderer.parentNode(this.elementRef.nativeElement),range);

    this.renderer.listen(range , 'input' , (event) => {
      let position = +event.target.value;
      this.setPositionValue(position);
    });

    this.control.control.valueChanges.subscribe((val) => {
        if(this.currentValue !== val) {
          this.currentValue = val;
          this.position = val;
          range.value = this.position;
        }
    });
  }
  setPositionValue(position){
    this.currentValue = +this.getValue(position).toFixed(0);
    this.control.control.setValue(this.currentValue);
  }
  // Calculate slider value from a position
  getValue(position) {
      return this.values[position];
  }
  // Calculate slider position from a value
  getPosition(value) {
      return this.values.findIndex(v => v < value); 
  }
}