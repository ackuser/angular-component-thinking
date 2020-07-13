import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollbarComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollbar', { static: true }) scrollbar: ElementRef;

  from = 0;
  to = 1000;
  used = 815;

  width: number;
  realTo: number;
  left: number;


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    
    
    console.log(`From --> ${this.from}`)
    console.log(`Used --> ${this.used}`)
    console.log(`Left --> ${this.left}`)
    console.log(`To --> ${this.to}`)
    console.log(`Width (in px) --> ${this.width}`)
    console.log(`RealTo = (this.used * this.width) / this.to  (in px) --> ${this.realTo}`)
    this.left = this.to - this.from - this.used;
  }
  
  ngAfterViewInit() {
    // setTimeout(()=>{

      this.width = (this.scrollbar as any).el.nativeElement.querySelector('.fy-c-scrollbar').offsetWidth;
      this.realTo = (this.used * this.width) / this.to;
      this.cd.detectChanges();

    // })
  }

}
