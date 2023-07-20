import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appIntersectionObserver]'
})

export class appIntersectionObserver implements OnInit, AfterViewInit{
    scrollWatcher !: Element

    constructor(private el:ElementRef, private renderer:Renderer2){}

    ngOnInit(){
        this.scrollWatcher = this.renderer.createElement('div');
        this.renderer.insertBefore(this.el.nativeElement.parentNode,this.scrollWatcher,this.el.nativeElement);
    }

    ngAfterViewInit(): void {
        this.observer.observe(this.scrollWatcher)
    }

    observer = new IntersectionObserver((entries) => {
        // let hasClass = this.el.nativeElement.classList.contains('sticking');
        console.log(entries[0].isIntersecting);
        let hasClass = !entries[0].isIntersecting;
        this.renderer[hasClass ? 'removeClass' : 'addClass' ](this.el.nativeElement,'sticking');
        this.renderer[hasClass ? 'removeClass' : 'addClass' ](this.el.nativeElement.firstChild.firstChild,'sticking');
    }, {rootMargin: "20px"})
}