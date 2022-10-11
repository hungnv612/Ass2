import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {environment} from '../../environments/environment';
import {Discount} from '../model/discount';
import {Category} from '../model/category';


const URL_API = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllS(): Observable<Book[]> {
    return this.http.get<Book[]>(URL_API + '/list');
  }

  getTopSale(): Observable<Book[]> {
    return this.http.get<Book[]>(URL_API + '/list/sale');
  }

  getTopNew(): Observable<Book[]> {
    return this.http.get<Book[]>(URL_API + '/list/new');
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(URL_API + `/show/${id}`);
  }

  getListAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(URL_API + '/listAllBook');
  }

  getAllDiscount(): Observable<Discount[]> {
    return this.http.get<Discount[]>(URL_API + '/listDiscount');
  }

  getAllCategory(): Observable<any> {
    return this.http.get<Category[]>(URL_API + '/listCategory');
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(URL_API + '/create', book);
  }

  delete(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put<any>(URL_API + '/' + id);
  }
  getCart() {
    const cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    } else {
      return [];
    }
  }

  saveCart(cart: any) {
    const cartJson = JSON.stringify(cart);
    sessionStorage.setItem('cart', cartJson);
  }

  getCartTotalQuantity() {
    const cart = this.getCart();
    let total = 0;
    cart.forEach((item: any) => {
      total += item.quantity;
    });
    return total;
  }

  getCartTotalMany() {
    const cart = this.getCart();
    let total = 0;
    cart.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  }
  totalMoneyAll() {
    const cart = this.getCart();
    let totalAll = 0;
    cart.forEach((item: any) => {
      totalAll += (item.price * item.quantity) * (1 - (item.discount / 100));
    });
    return totalAll;
  }
}
