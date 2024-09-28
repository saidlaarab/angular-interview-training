import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appHighlight]' // the selector name HAS to be between square brackets !!!
})
export class HighlightDirective {

    @Input() appHighlight!: string; // we can use the same name of the directive for an input, and it that case,
                                    // we declare the directive and bind the value at the same time (see the template)
    
    @Input() textColor!: string; // we can add a second input, we bind it to the host element as a regular input

    constructor(private elementRef: ElementRef){}

    @HostListener('mouseenter')
    onMouseEnter(){
        this.elementRef.nativeElement.style.backgroundColor = this.appHighlight;
        this.elementRef.nativeElement.style.color = this.textColor;
        this.elementRef.nativeElement.innerHTML = 'Highlited!';
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.elementRef.nativeElement.style.backgroundColor = '';
        this.elementRef.nativeElement.style.color = 'black';
        this.elementRef.nativeElement.innerHTML = 'Text to be highlighted';
    }

}