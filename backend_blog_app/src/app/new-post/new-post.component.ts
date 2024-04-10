import { Component } from '@angular/core';
import { CategoryService } from '../#Services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  paramatext:any;
  imgsrc:any = '.\assest\image.jpg'
  ngModel: any;
  selectedImg:any;
  categories:any;


  postForm:FormGroup
constructor(
  private service: CategoryService,
  private fb:FormBuilder
){
  this.postForm = this.fb.group({
    title: [''],
    permalink:[''],
    expert:[''],
    category:[''],
    postImg:[''],
    content:['']
  })
}

ngOnInit(){
  this.service.loadData().subscribe(res =>{
    this.categories = res;
  })
}
  permatext($event:any){
    // console.log($event.target.value);
    this.paramatext =  $event.target.value.replace(/\s/g , "-");
    // paramatext.replace(/\s/g , "-");
    // console.log("paramatext",paramatext)
  }
// *******************************************not working properly********************************
  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
        if (e.target) {
            // If e.target is not null, then access its properties safely
            this.imgsrc = e.target.result;
        } else {
            // Handle the case where e.target is null, if necessary
            console.error("Event target is null.");
        }
    }
    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files
}

// ********************************************************************************8
}
