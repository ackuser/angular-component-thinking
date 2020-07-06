import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scrollbar-detail',
  templateUrl: './scrollbar-detail.component.html',
  styleUrls: ['./scrollbar-detail.component.scss']
})
export class ScrollbarDetailComponent implements OnInit {

  @Input() from = 0;
  @Input() to;

  constructor() { }

  ngOnInit() {
  }

}
