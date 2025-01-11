import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';

@Component({
  selector: 'app-delete-category',
  imports: [CommonModule],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss'
})
export class DeleteCategoryComponent {

   subjectObj:any[]=[];
  
    constructor(private subject:SubjectServiceService,private _snack:MatSnackBar){
      this.subject.getCategory().subscribe((res:any)=>{
        this.subjectObj=res;
  
      
      }) 
}
}
