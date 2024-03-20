import { Component } from '@angular/core';
import { Console, error } from 'console';
import { CategoryService } from '../#Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private service : CategoryService){
     
  }

  onSubmit(formData:any){
    let categoryData =  {
      category: formData.value
    }
    console.log("Category Data",categoryData);

    this.service.saveData(categoryData);
    formData.reset();
    
  }

}
