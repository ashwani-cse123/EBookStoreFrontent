import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../Service/book-service/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-book',
  imports: [CommonModule],
  templateUrl: './get-book.component.html',
  styleUrl: './get-book.component.scss'
})
export class GetBookComponent implements OnInit{

  bookObj : any[] = [];
  subjectId : any;

  constructor(private route:ActivatedRoute, private _book:BookServiceService, private _snack:MatSnackBar){}


  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('subject_id');
    this.loadSubjects();
  }



  loadSubjects(): void{
    this._book.getBookBySubjectId(this.subjectId).subscribe((res:any)=>{
      this.bookObj=res;
    });
  }

  onCardClick(id: any):void{
    const subjectId = parseInt(id);
    // this.route.navigate(["get-subject", categoryId]);
  }

}
