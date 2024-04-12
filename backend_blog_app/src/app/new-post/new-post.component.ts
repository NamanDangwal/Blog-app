import { Component } from '@angular/core';
import { CategoryService } from '../#Services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';

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
  postForm:any;

constructor(
  private service: CategoryService,
  private fb:FormBuilder
){
  this.createForm();
}

createForm(){ this.postForm = this.fb.group({
  title: ['',[Validators.required,Validators.minLength(10)]],
  permalink:['',[Validators.required]],
  expert:['',[Validators.required,Validators.minLength(50)]],
  category:['',Validators.required],
  postImg:['',Validators.required],
  content:['',Validators.required]
})
}


ngOnInit(){
  this.service.loadData().subscribe(res =>{
    this.categories = res;
  })
}

get fc(){
  return this.postForm.controls
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
onsubmit(){

  let split = this.postForm.value.category.split('-');
  console.log(split)

  console.log(this.postForm.value);

  const postData: Post={
    title:this.postForm.value.title,
    permalink:this.postForm.value.permalink ,
    category: {
      categoryId: split[0],
      category: split[1]
    },
    postImgPath: '',
    excerpt: this.postForm.value.expert,
    content: this.postForm.value.content,
    isFeatured: false,
    views: 0,
    status: 'new',
    createdAt: new Date()
  }
  console.log(postData);
}

}




