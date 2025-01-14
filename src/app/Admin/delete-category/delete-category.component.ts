import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CategoryService } from '../../Service/category-service/category.service';
import { error } from 'node:console';

@Component({
  selector: 'app-delete-category',
  imports: [CommonModule],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss'
})
export class DeleteCategoryComponent implements OnInit{

  categoryObj:any[]=[];

  constructor(private _category:CategoryService, private _snack:MatSnackBar){}


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void{
    this._category.getCategory().subscribe((res:any)=>{
      this.categoryObj=res;
    });
  }

  deleteCategory(id :any){
    const categoryId = parseInt(id);
    this._category.deleteCategory(categoryId).subscribe((result)=>{
        console.log(result);
    },(error)=>{
      console.log(error);
    });
    this.ngOnInit();
  }

}
