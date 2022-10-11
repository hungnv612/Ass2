import {Discount} from './discount';
import {Category} from './category';

export interface Book {
  id?: number;
  name?: string;
  code?: string;
  description?: string;
  dimension?: string;
  image?: string;
  publisher?: string;
  quantity?: number;
  releaseDate?: string;
  price?: number;
  totalPages?: number;
  translator?: string;
  status?: boolean;
  author?: string;
  discount?: Discount;
  category?: Category;
}
