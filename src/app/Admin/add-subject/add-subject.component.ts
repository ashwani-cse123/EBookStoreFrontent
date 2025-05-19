import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-subject',
  imports: [
    MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,FormsModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent implements OnInit{

  subjectAdd:any={
    subjectName: '',
    subjectDiscription:'',
    categoryName:'',
    file: null as File |null
  };

  subjectObj:any[]=[];

  constructor(private subject:SubjectServiceService,private _snack:MatSnackBar){
   
    }
  ngOnInit(): void {
    this.loadCategories();
  }

  upload(event:any){
    this.subjectAdd.file = event.target.files[0];
  }
  formSubmit(){
    if(this.subjectAdd.subjectName.trim() =='' || this.subjectAdd.subjectName==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
  const  formdata = new FormData(); 
  formdata.append('subjectName' ,this.subjectAdd.subjectName);
  formdata.append('subjectDiscription',this.subjectAdd.subjectDiscription);
  formdata.append('imagePath',this.subjectAdd.file as Blob);
  formdata.append('categoryName',this.subjectAdd.categoryName)



    this.subject.addSubject(formdata).subscribe((data:any)=>{
      alert("form save successfully");
      this._snack.open('you have successfully upload your subject!!','',{
        duration:2000,
        
      });
      debugger;
      console.log("you are in reset")
      debugger;
      this.subjectAdd.categoryName=''
      this.subjectAdd.subjectDiscription=''
      this.subjectAdd.subjectName=''
      this.subjectAdd.file=''
      },
      
      (error)=>{
        console.log(this.subjectAdd);
        console.log(error);
        
      });
  }

loadCategories(): void {
  this.subject.getCategory().subscribe(
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

