import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CategoryService } from '../../Service/category-service/category.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  imports: [CommonModule],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss',
})
export class DeleteCategoryComponent implements OnInit {
  subjectObj: any[] = [];
$item: any;

  constructor(
    private subject: SubjectServiceService,
    private _snack: MatSnackBar,
    private category:CategoryService,
    private router:Router

  ) {
   
  }
  ngOnInit(): void {
   this.getCategory();
  }
  onupdateCategory(id:number){
    this.router.navigate(["/admin/update-category",id]);
  }

  getCategory(){
    this.subject.getCategory().subscribe((res: any) => {
      this.subjectObj = res;
    });
  }

  ondeleteCategory(id:number): void{
    if (confirm('Are you sure you want to delete this item?')) {
      this.category.deleteItem(id).subscribe((res:any)=>{
 
        alert('Item deleted successfully!');
        window.location.reload();
      })
        
         
       
        
      } 
    }
  }


 