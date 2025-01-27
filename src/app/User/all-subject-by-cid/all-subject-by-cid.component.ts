import { Component, Input, OnInit } from '@angular/core';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-subject-by-cid',
  imports: [CommonModule,RouterLink],
  templateUrl: './all-subject-by-cid.component.html',
  styleUrl: './all-subject-by-cid.component.scss'
})
export class AllSubjectByCIdComponent implements OnInit {

  updateId: any;

  
  
     constructor(private route:ActivatedRoute,private subject:SubjectServiceService,private _snack:MatSnackBar){
       
        }
     
    subjectObj: any[]=[];
     
    
  
   
     
    ngOnInit(): void {
      this.updateId = this.route.snapshot.paramMap.get('id');
      const id = parseInt(this.updateId);
        this.subject.getSubjectByCategoryId(id).subscribe(
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
