import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-subject',
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,FormsModule],
  templateUrl: './update-subject.component.html',
  styleUrl: './update-subject.component.scss'
})
export class UpdateSubjectComponent implements OnInit {
 
  constructor(private route:ActivatedRoute,private subjectService:SubjectServiceService,private _snack:MatSnackBar) {}   



  subjecObj:any={
    title: '',
    description:'',
    file: null as File |null
  };
  updateId: any;

  ngOnInit(): void {
    this.updateId = this.route.snapshot.paramMap.get('id'); 
  }

  upload(event:any){
    this.subjecObj.file = event.target.files[0];
  }
  formSubmit(){
    if(this.subjecObj.title.trim() =='' || this.subjecObj.title==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
  const  formdata = new FormData(); 
  formdata.append('subjectName' ,this.subjecObj.title);
  formdata.append('subjectDiscription',this.subjecObj.description);
  formdata.append('imagePath',this.subjecObj.file as Blob);
   

  const id = parseInt(this.updateId);
  this.subjectService.updateSubjectById(id,formdata).subscribe((data:any)=>{
    this._snack.open('you have successfully update your subject!!','',{
      duration:5000,
    });
      this.subjecObj.title=''
      this.subjecObj.description=''
      this.subjecObj.file=null
      
    },
    (error)=>{
      console.log(this.subjecObj);
      console.log(error);
      
    });



  }

}
