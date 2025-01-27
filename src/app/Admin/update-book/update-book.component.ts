import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Service/book-service/book.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-book',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.scss'
})
export class UpdateBookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private book:BookService ,private _snack:MatSnackBar){}

  subjectId:any;

  bookAdd:any ={
    bookName:'',
    bookDiscription:'',
    pages:'',
    bookAutherName:'',
    bookImage:null as File | null,
    filePath:null as File | null,

  };


  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');   
  }
  upload(event:any){
    this.bookAdd.bookImage = event.target.files[0];
  }
  uploadpdf(event:any) {
    this.bookAdd.filePath =  event.target.files[0];
 
  }

  formSubmit(){
    if(this.bookAdd.bookName.trim() =='' || this.bookAdd.bookName==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
  const  formdata = new FormData(); 
  formdata.append('bookName' ,this.bookAdd.bookName);
  formdata.append('bookDiscription',this.bookAdd.bookDiscription);
  formdata.append('filePath',this.bookAdd.filePath as Blob);
  formdata.append('bookPrice',this.bookAdd.pages)
  formdata.append('bookAutherName',this.bookAdd.bookAutherName)
  formdata.append('bookImage',this.bookAdd.bookImage as Blob);

  const id = parseInt(this.subjectId);
    this.book.updateBookById(id,formdata).subscribe((data:any)=>{
      alert("form update successfully");
      this._snack.open('you have successfully update your book!!','',{
        duration:3000,
        
      });
      debugger;
      console.log("you are in reset")
      debugger;
      this.bookAdd.bookName=''
      this.bookAdd.bookDiscription=''
      this.bookAdd.pages=''
      this.bookAdd.filePath=''
      this.bookAdd.bookImage=''
      this.bookAdd.bookAutherName=''

      },
      
      (error)=>{
        console.log(this.bookAdd);
        console.log(error);
        
      });
  }


 


}
