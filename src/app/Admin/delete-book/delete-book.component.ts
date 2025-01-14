import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../Service/book-service/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-book',
  imports: [CommonModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.scss'
})
export class DeleteBookComponent implements OnInit{
   bookObj:any[]=[];

  constructor( private _book:BookServiceService,private _snack:MatSnackBar){}

  ngOnInit():void{
    this.loadBook();
  }

  loadBook(): void{
    this._book.getBook().subscribe((res:any)=>{
      this.bookObj=res;
    });
  }

  deleteBook(id : number){
    this._book.deleteBook(id).subscribe((result)=>{
        console.log(result);
    });
    this.ngOnInit();
  }

  updateBook(id: number, formData:FormData){
    this._book.updateBook(id, formData).subscribe((data)=>{

    });
    this.ngOnInit();
  }

}
