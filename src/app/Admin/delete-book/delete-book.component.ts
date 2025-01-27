import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Service/book-service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  imports: [FormsModule,CommonModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.scss'
})
export class DeleteBookComponent implements OnInit{

  constructor(private bookServ:BookService ,private route:Router){}
  loadBookObj:any[] = [];

  ngOnInit(): void {
    this.bookLoad();
  }
  bookLoad(){
    this.bookServ.getBook().subscribe((res:any)=>{
      this.loadBookObj = res;
    })
  }
  onUpdate(id:number){
    this.route.navigate(['/admin/update-book',id]);
  }
  onDelete(id:number){
    if (confirm('Are you sure you want to delete this item?')) {

      this.bookServ.deleteBookById(id).subscribe((res:any)=>{
        
        alert('Item deleted successfully!');
        this.ngOnInit();
        // window.location.reload();
      })
        
         
       
        
      }
   
  }

}
