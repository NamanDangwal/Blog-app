import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Console, error } from 'console';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private afs: AngularFirestore){
     
  }

  onSubmit(formData:any){
    let categoryData =  formData.value;
    console.log("Category Data",categoryData);

    this.afs.collection('Categories').add(categoryData).then(res=>{
      console.log("Res",res);
    })
    .catch(error=>{console.log(error)})
  }

}
