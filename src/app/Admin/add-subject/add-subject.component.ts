import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectServiceService } from '../../Service/subject-service/subject-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-subject',
  imports: [
    MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent implements OnInit{

  subjectObj:any[]=[];

  constructor(private subject:SubjectServiceService,private _snack:MatSnackBar){
   
    }
  ngOnInit(): void {
    this.loadCategories();
  }

   


loadCategories(): void {
  this.subject.getCategory().subscribe(
    (data:any) => {
      this.subjectObj = data;  // Now data is correctly typed as Category[]
    },
    (error) => {
      console.log(this.subjectObj);
      console.log(error);
      // Swal.fire("Error", "Server error", "error");  // Uncomment to show error message
    }
  );
}
}

