import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../Service/category-service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-reuse-category',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    
     
  ],
  templateUrl: './reuse-category.component.html',
  styleUrl: './reuse-category.component.scss'
})
export class ReuseCategoryComponent {
   
  category:any={
    title: '',
    description:'',
    file: null as File |null
  };
  updateId: any;

  constructor(private route:ActivatedRoute,private _category:CategoryService,private _snack:MatSnackBar){
  
  }
  
    ngOnInit(): void {
     this.updateId = this.route.snapshot.paramMap.get('id');
     console.log(this.updateId);
    
    }
    upload(event:any){
      this.category.file = event.target.files[0];
    }
  
    formSubmit(){
      if(this.category.title.trim() =='' || this.category.title==null){
        this._snack.open('Title required !!','',{
          duration:3000,
        });
        return;
      }
    const  formdata = new FormData(); 
    formdata.append('categoryName' ,this.category.title);
    formdata.append('discription',this.category.description);
    formdata.append('imagePath',this.category.file as Blob);


      const id = parseInt(this.updateId);
      this._category.updateCategory(id,formdata).subscribe((data:any)=>{
        this._snack.open('you have successfully upload your category!!','',{
          duration:3000,
        });
          this.category.title=''
          this.category.description=''
          this.category.file=null
          
        },
        (error)=>{
          console.log(this.category);
          console.log(error);
          
        });
    }

}
