import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Author} from './author.model';
import {Category} from './category.model';

@model()
export class Book extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,  
  })
  isbn: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @belongsTo(() => Author, {name: 'author'})  
  author_id: number;

  @belongsTo(() => Category, {name: 'category'})  
  category_id: number;

  @property({
    type: 'string',
    required: true,
  })
  pubDate: string; 

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

/** ✅ Add this missing export */
export interface BookRelations {
  author?: Author;
  category?: Category;
}

export type BookWithRelations = Book & BookRelations;
