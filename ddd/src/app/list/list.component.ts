import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BookService} from '../service/book.service';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: Book[] = [];
  bookListSale: Book[] = [];
  bookListNew: Book[] = [];
  id: any;
  image: any;
  price: any;
  author: any;
  name: any;
  cart: any = this.bookService.getCart();

  codeModal: string;
  nameModal: string;
  idModal: number;

  constructor(private bookService: BookService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.bookService.getAllS().subscribe(list => {
      this.bookList = list;
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

  showDelete(book: Book) {
    this.idModal = book.id;
    this.nameModal = book.name;
    this.codeModal = book.code;
  }

  delete(idModal: number) {
    console.log(idModal);
    this.bookService.delete(idModal).subscribe(() => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

  addToCart(book: any) {
    const idx = this.cart.findIndex((item: any) => {
      // tslint:disable-next-line:triple-equals
      return item.id == book.id;
    });
    if (idx >= 0) {
      this.cart[idx].quantity += 1;
    } else {
      const cartItem: any = {
        image: book.image,
        id: book.id,
        author: book.author,
        name: book.name,
        price: book.price,
        discount: book.discount.percent,
        quantity: 1,
      };
      this.cart.push(cartItem);
    }
    this.bookService.saveCart(this.cart);
    Swal.fire({
      title: 'Thông Báo!',
      text: 'Thêm vào giỏ thành công',
      color: '#EBA850',
      icon: 'success',
      iconColor: ' #EBA850',
      timer: 1000
    });
  }
}
