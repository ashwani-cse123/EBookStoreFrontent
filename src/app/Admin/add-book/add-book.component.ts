import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../Service/book-service/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [
    MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {


  subjectObj:any[] =[];

  bookAdd:any ={
    bookName:'',
    bookDiscription:'',
    bookPrice:'',
    bookAutherName:'',
    bookImage:null as File | null,
    filePath:null as File | null,
    subjectName:''

  };

  constructor(private book:BookService ,private _snack:MatSnackBar){}

  ngOnInit(): void {
    this. loadSubject();
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
  formdata.append('bookPrice',this.bookAdd.bookPrice)
  formdata.append('bookAutherName',this.bookAdd.bookAutherName)
  formdata.append('subjectName',this.bookAdd.subjectName)
  formdata.append('bookImage',this.bookAdd.bookImage as Blob);


    this.book.addBook(formdata).subscribe((data:any)=>{
      alert("book save successfully");
      this._snack.open('you have successfully upload your book!!','',{
        duration:3000,
        
      });
      debugger;
      console.log("you are in reset")
      debugger;
      this.bookAdd.bookName=''
      this.bookAdd.bookDiscription=''
      this.bookAdd.bookPrice=''
      this.bookAdd.filePath=''
      this.bookAdd.bookImage=''
      this.bookAdd.bookAutherName=''

      },
      
      (error)=>{
        console.log(this.bookAdd);
        console.log(error);
        
      });
  }



  loadSubject(): void {
    this.book.getSubject().subscribe(
      (data:any) => {
        this.subjectObj = data;  
      },
      (error) => {
        console.log(this.subjectObj);
        console.log(error);
   
      }
    );
  }






}
