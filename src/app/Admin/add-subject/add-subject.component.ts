import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../Service/category-service/category.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-subject',
  imports: [
    MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,
    FormsModule
  ],

  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent implements OnInit{

  subject:any={
    categoryName:'',
    title: '',
    description:'',
    file: null as File |null
  };

  subjectObj:any[]=[];

  constructor(private _category:CategoryService, private _subject:SubjectServiceService,private _snack:MatSnackBar){

    }
  ngOnInit(): void {
    this.loadCategories();
  }


  loadCategories(): void {
    this._category.getCategory().subscribe(
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

  upload(event:any){
    this.subject.file = event.target.files[0];
  }

  formSubmit(){
    if(this.subject.title.trim() =='' || this.subject.title==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
    const  formdata = new FormData();
    formdata.append('categoryName' ,this.subject.categoryName);
    formdata.append('subjectName' ,this.subject.title);
    formdata.append('discription',this.subject.description);
    formdata.append('image',this.subject.file as Blob);

    this._subject.addSubject(formdata).subscribe((data:any)=>{
      this._snack.open('you have successfully upload your category!!','',{
        duration:10000,
      });
        this.subject.categoryName='';
        this.subject.title='';
        this.subject.description='';
        this.subject.file=null;
      },
      (error)=>{
        console.log(this.subject);
        console.log(error);
      }
    );
  }
}

