import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
constructor(
    private ele : ElementRef,
    private render : Renderer2
){}

isShow : boolean = false;

@HostListener('click')
onToggle(){
  if(!this.isShow){
    this.render.addClass(this.ele.nativeElement.nextElementSibling, 'show')
  }else{
    this.render.removeClass(this.ele.nativeElement.nextElementSibling, 'show')
  }
}

}
