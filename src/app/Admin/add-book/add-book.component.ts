import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../../Service/book-service/book-service.service';

@Component({
  selector: 'app-add-book',
  imports: [
    MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,
        FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit{
  book:any={
    subjectName:'',
    bookName: '',
    bookPrice: '',
    authorName: '',
    description:'',
    image: null as File |null,
    bookUrl: null as File |null
  };

  subjectObj:any[]=[];

  constructor(private _subject:SubjectServiceService, private _book:BookServiceService,private _snack:MatSnackBar){}

  ngOnInit(): void {
    this.loadSubjects();
  }


  loadSubjects(): void {
    this._subject.getSubject().subscribe(
      (data:any) => {
        this.subjectObj = data;  // Now data is correctly typed as Category[]
      },
      (error) => {
        console.log(this.subjectObj);
        console.log(error);
        // Swal.fire("Error", "Server error", "error");  // Uncomment to show error message
      }
    );
  }

  uploadImage(event:any){
    this.book.image = event.target.files[0];
  }
  uploadPdf(event:any){
    this.book.bookUrl = event.target.files[0];
  }

  formSubmit(){
    if(this.book.bookName.trim() =='' || this.book.bookName==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
    const  formdata = new FormData();
    formdata.append('subjectName' ,this.book.subjectName);
    formdata.append('bookName' ,this.book.bookName);
    formdata.append('bookPrice' ,this.book.bookPrice);
    formdata.append('authorName' ,this.book.authorName);
    formdata.append('discription',this.book.description);
    formdata.append('image',this.book.image as Blob);
    formdata.append('bookUrl',this.book.bookUrl as Blob);

    this._book.addBook(formdata).subscribe((data:any)=>{
      this._snack.open('you have successfully upload your category!!','',{
        duration:10000,
      });
        this.book.subjectName='';
        this.book.bookName='';
        this.book.bookPrice='';
        this.book.authorName='';
        this.book.description='';
        this.book.image=null;
        this.book.bookUrl=null;
      },
      (error)=>{
        console.log(this.book);
        console.log(error);
      }
    );
  }

}
