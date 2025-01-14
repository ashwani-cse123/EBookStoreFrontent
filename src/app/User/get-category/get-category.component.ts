import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Service/category-service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';

@Component({
  selector: 'app-get-category',
  imports: [CommonModule],
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.scss'
})
export class GetCategoryComponent implements OnInit {
  categoryObj:any[]=[];

  constructor(private route:Router,private _category:CategoryService, private _snack:MatSnackBar){}


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void{
    this._category.getCategory().subscribe((res:any)=>{
      this.categoryObj=res;
    });
  }

  onCardClick(item: any):void{
    const categoryId = parseInt(item.id);
    this.route.navigate([`/user-dashboard/get-subject`, categoryId]);
  }


}
