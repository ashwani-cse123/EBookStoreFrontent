import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../Service/category-service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-category',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnInit {

  category:any={
    title: '',
    description:'',
    file: null as File |null
  };

  constructor(private _category:CategoryService,private _snack:MatSnackBar){

  }

    ngOnInit(): void {

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



      this._category.addCategory(formdata).subscribe((data:any)=>{
        this._snack.open('you have successfully upload your category!!','',{
          duration:10000,
        });
          this.category.title='';
          this.category.description='';
          this.category.file = null;

        },
        (error)=>{
          console.log(this.category);
          console.log(error);

        });
    }
}
