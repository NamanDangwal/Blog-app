import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_app';

  navbarfixed:boolean = true;


  @HostListener('window:scroll', ['$event']) onScroll(){
    if (window.scrollY > 100){
      this.navbarfixed = true;
    }
    else{
      this.navbarfixed = true;
    }
  }
}
