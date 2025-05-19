import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { Subject } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-subject',
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './delete-subject.component.html',
  styleUrl: './delete-subject.component.scss'
})
export class DeleteSubjectComponent implements OnInit{



  
    constructor(private router:Router,private subject:SubjectServiceService,private _snack:MatSnackBar){
     
      }
  categoryObj:any[]=[];
  subjectObj: any[]=[];
  
  categoryid: string ='';
 

  onupdatesubject(id:number){
    this.router.navigate(["/admin/update-subject",id]);
  }
  ondeleteSubject(id:number){
    {
      if (confirm('Are you sure you want to delete this item?')) {

        this.subject.deleteSubjectById(id).subscribe((res:any)=>{
          
          alert('Item deleted successfully!');
          this.ngOnInit();
          // window.location.reload();
        })
          
           
         
          
        } 
    }

  }
   
  ngOnInit(): void {
    this.loadCategories();
    this.loadSubject();
   
  }
  loadSubject(): void {
    this.subject.getSubject().subscribe(
      (data:any) => {
        this.subjectObj = data; 
        
      },
      (error) => {
        console.log(this.subjectObj);
        console.log(error);
   
      }
    );
  }
  

  loadCategories(): void {
    this.subject.getCategory().subscribe(
      (data:any) => {
        this.categoryObj = data;  
      },
      (error) => {
        console.log(this.categoryObj);
        console.log(error);
   
      }
    );
  }

}
