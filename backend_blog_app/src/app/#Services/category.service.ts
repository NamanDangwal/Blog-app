import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';


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

loadData(){
  return this.afs.collection('Categories').snapshotChanges().pipe(
  map(actions => {
    return actions.map(a =>{
      const data = a.payload.doc.data();
      const id  = a.payload.doc.id;
      return {data , id};
    })
  })
  )
}

updateData(id:any,EditedData:any){
  this.afs.collection('Categories').doc(id).update(EditedData).then(ref=>{
    this.toaster.success( 'Category added successfully......!');
    console.log("Updated");
  })
}

deleteData(id:any){
this.afs.collection('Categories').doc(id).delete().then(ref=>{
  this.toaster.success( 'Category added successfully......!');
  console.log("Deleted")

})
}
}
