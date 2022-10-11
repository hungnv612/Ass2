import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {Discount} from '../model/discount';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  category: Category[] = [];
  discount: Discount[] = [];

  bookForm: FormGroup = new FormGroup({
    author: new FormControl(''),
    code: new FormControl(''),
    description: new FormControl(''),
    dimension: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    publisher: new FormControl(''),
    quantity: new FormControl(''),
    releaseDate: new FormControl(''),
    totalPages: new FormControl(''),
    translator: new FormControl(''),
    category: new FormControl(''),
    discount: new FormControl(''),

  });

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
  }


  ngOnInit(): void {
    this.getCategory();
    this.getDiscount();
  }

  getCategory(): void {
    this.bookService.getAllCategory().subscribe((categoryService?: any) => {
      this.category = categoryService;
    });
  }

  getDiscount(): void {
    this.bookService.getAllDiscount().subscribe((discountService?: any) => {
      this.discount = discountService;
    });
  }

  submit() {
    const book = this.bookForm.value;
    book.category = {
      id: +book.category
    };
    book.discount = {
      id: +book.discount
    };
    console.log(book);
    this.bookService.saveBook(book).subscribe(() => {
    }, error => {
      this.toast.error(error);
    }, () => {
      this.bookForm.reset();
      this.router.navigate(['/list']);
      this.toast.success('Thêm book thành công', 'Thông báo');
    });
  }
}
