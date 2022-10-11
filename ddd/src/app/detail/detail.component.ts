import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../model/book';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book = null;
  bookListSale: Book[] = [];
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
      console.log(this.book);
    });
  }

  ngOnInit(): void {
    this.getTopSale();
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.book = book;
    });
  }
  getTopSale() {
    return this.bookService.getTopSale().subscribe(list => {
      this.bookListSale = list;
    });
  }
}
