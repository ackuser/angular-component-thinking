import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scrollbar-detail',
  templateUrl: './scrollbar-detail.component.html',
  styleUrls: ['./scrollbar-detail.component.scss']
})
export class ScrollbarDetailComponent implements OnInit {

  width: number;
  realTo: number;
  left: number;

  mouseover: boolean;

  @HostListener('mouseover')
  onMouseOver() {
    this.mouseover = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.mouseover = false;
  }

  @Input() from = 0;
  @Input() to;
  @Input() used;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.width = this.el.nativeElement.offsetWidth;
    this.realTo = (this.used * this.width) / this.to;
    this.left = this.to - this.from - this.used; 
    console.log(`From --> ${this.from}`)
    console.log(`Used --> ${this.used}`)
    console.log(`Left --> ${this.left}`)
    console.log(`To --> ${this.to}`)
    console.log(`Width (in px) --> ${this.width}`)
    console.log(`RealTo = (this.used * this.width) / this.to  (in px) --> ${this.realTo}`)
  }

}
