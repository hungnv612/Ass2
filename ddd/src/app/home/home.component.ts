import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../model/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList: Book[] = [];
  bookListSale: Book[] = [];
  bookListNew: Book[] = [];
  priceSale: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getTopSale();
    this.getTopNew();
  }

  getAll() {
    return this.bookService.getListAllBook().subscribe((list: any) => {
      console.log(list);
      this.bookList = list.content;
    });
  }

  getTopSale() {
    return this.bookService.getTopSale().subscribe(list => {
      this.bookListSale = list;
    });
  }

  getTopNew() {
    return this.bookService.getTopNew().subscribe(list => {
      this.bookListNew = list;
    });
  }

}
