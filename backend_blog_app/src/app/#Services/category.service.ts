import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs : AngularFirestore, private toaster : ToastrService) {}

  saveData(data:any){
    this.afs.collection('Categories').add(data).then(res=>{
      console.log("Res",res);
      this.toaster.success( 'Category added successfully......!');
    })
    .catch(error=>{console.log(error)})

  }
}
