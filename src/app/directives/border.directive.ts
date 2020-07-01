import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({ selector: '[appBorder]' })
export class BorderDirective implements OnInit {

    private appBorder = "15px solid";
    private appBorderColor = "hsl(229, 57%, 11%)";
    private appBorderRadius = "12px";

    constructor(private elem: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.elem.nativeElement, 'border', `${this.appBorder} ${this.appBorderColor}`);
        this.renderer.setStyle(this.elem.nativeElement, 'border-radius', `${this.appBorderRadius}`);
    }
}