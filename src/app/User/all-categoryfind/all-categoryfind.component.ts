import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { Router, RouterLink } from '@angular/router';
import { AllSubjectByCIdComponent } from "../all-subject-by-cid/all-subject-by-cid.component";

@Component({
  selector: 'app-all-categoryfind',
  imports: [CommonModule, RouterLink],
  templateUrl: './all-categoryfind.component.html',
  styleUrl: './all-categoryfind.component.scss'
})
export class AllCategoryfindComponent {

  categorId:any ='';
  idSendToSubject(id:number){
    this.categorId=id;
debugger;
  }

  categoryobj: any[] = [];
    constructor(
      private subject: SubjectServiceService,
      private _snack: MatSnackBar,
      private router:Router
  
    ) {}
    ngOnInit(): void {
      this.getCategory();
     }
     getCategory(){
      this.subject.getCategory().subscribe((res: any) => {
        this.categoryobj = res;
      });
    }

}
