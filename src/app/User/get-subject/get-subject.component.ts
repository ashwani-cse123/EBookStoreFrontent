import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-subject',
  imports: [CommonModule],
  templateUrl: './get-subject.component.html',
  styleUrl: './get-subject.component.scss'
})
export class GetSubjectComponent implements OnInit{

  subjectObj : any[] = [];
  categoryId : any;

  constructor(private router:Router, private route:ActivatedRoute, private _subject:SubjectServiceService, private _snack:MatSnackBar){}


  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('category_id');
    this.loadCategories();
  }



  loadCategories(): void{
    this._subject.getSubjectByCategoryId(this.categoryId).subscribe((res:any)=>{
      this.subjectObj=res;
    });
  }

  onCardClick(id: any):void{
    const subjectId = parseInt(id);
    this.router.navigate([`/user-dashboard/get-book`, subjectId]);
  }
}
