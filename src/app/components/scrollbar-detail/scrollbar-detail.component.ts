import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scrollbar-detail',
  templateUrl: './scrollbar-detail.component.html',
  styleUrls: ['./scrollbar-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollbarDetailComponent {

  @Output()
  mouseover: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  @HostListener('mouseover')
  onMouseOver() {
    this.mouseover.emit(true);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.mouseover.emit(false);
  }

  @Input() from;
  @Input() used;
  @Input() to;
  @Input() realTo;

  constructor(private el: ElementRef) {
  }

}
