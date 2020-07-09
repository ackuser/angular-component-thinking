import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {

  from = 0;
  to = 1000;
  used = 815;

  constructor() { }

  ngOnInit() {
  }

}
