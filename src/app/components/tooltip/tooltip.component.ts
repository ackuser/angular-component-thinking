import { Component, OnInit, Input, HostBinding, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, OnChanges {

  @HostBinding('style.visibility') visibility: string;

  @Input() amount: number;
  @Input() visible: boolean;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.visible && changes.visible.currentValue) {
      this.visibility = "visible";
    }
    else {
      this.visibility = "hidden";
    }
  }

}