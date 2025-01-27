import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Service/book-service/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
 
 

@Component({
  selector: 'app-all-books',
  imports: [CommonModule,
    FormsModule,
    
  ],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {

  subjectId:any;

    constructor(private route:ActivatedRoute,private bookServ:BookService){}
    loadBookObj:any[] = [];
  
    ngOnInit(): void {
      this.subjectId = this.route.snapshot.paramMap.get('id');
      const id = parseInt(this.subjectId);
        this.bookServ.getBookBySubjectId(id).subscribe((res:any)=>{
          this.loadBookObj = res;
        })
       
       
    }
    getFileDownloadUrl(file: string): string {
      return `http://localhost:8080${file}`; // Full download URL
    }
    shareBook() {
      if (navigator.share) {
        navigator
          .share({
            title: this.subjectId,
            text: `Check out this book: ${this.subjectId}`,
            url: this.subjectId
          })
          .then(() => console.log('Shared successfully!'))
          .catch((error) => console.error('Error sharing:', error));
      } else {
        alert('Sharing is not supported on this device.');
      }
    }
    isLiked: boolean = false;
    toggleLike() {
      this.isLiked = !this.isLiked;
      
    }
  
}
