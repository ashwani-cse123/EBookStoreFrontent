import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-subject',
  imports: [CommonModule],
  templateUrl: './delete-subject.component.html',
  styleUrl: './delete-subject.component.scss'
})
export class DeleteSubjectComponent implements OnInit{
  subjectObj:any[]=[];

  constructor( private _subject:SubjectServiceService,private _snack:MatSnackBar){}

  ngOnInit():void{
    this.loadSubject();
  }

  loadSubject(): void{
    this._subject.getSubject().subscribe((res:any)=>{
      this.subjectObj=res;
    })
  }

  deleteSubject(id : number){
    this._subject.deleteSubject(id).subscribe((result)=>{
        console.log(result);
    });
    this.ngOnInit();
  }

  updateSubject(id: number, formData:FormData){
    this._subject.updateSubject(id, formData).subscribe((data)=>{

    });
    this.ngOnInit();
  }
}
