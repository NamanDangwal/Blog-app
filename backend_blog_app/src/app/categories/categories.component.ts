import { Component } from '@angular/core';
import { Console, error } from 'console';
import { CategoryService } from '../#Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryArray:any;
  fromCategory:any;
  formStatus:string =  'Add';
  ctaegoryId:any;
  
  constructor(private CategoryService : CategoryService){
    
  }

  ngOnInit(){
    this.CategoryService.loadData().subscribe(val =>{
      console.log(val);
      this.categoryArray = val;
      console.log(this.categoryArray)
    })
  }

  onSubmit(formData:any){
    let categoryData =  {
      category: formData.value
    }
    console.log("Category Data",categoryData);
    if (this.formStatus == "Edit") {
      this.CategoryService.updateData(this.ctaegoryId,categoryData);
    }
    else{
    this.CategoryService.saveData(categoryData);
    formData.reset();
    this.formStatus = 'Add';
    }
  }

  edit(category: any , id:any){
    this.fromCategory=category.categories
    this.formStatus = 'Edit'
    this.ctaegoryId =id;
    console.log(this.ctaegoryId)
  }

  delete(id:any){
    this.CategoryService.deleteData(id)
  }

}
