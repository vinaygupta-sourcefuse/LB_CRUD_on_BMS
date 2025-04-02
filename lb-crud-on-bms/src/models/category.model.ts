import {Entity, model, property, hasMany} from '@loopback/repository';
import {Book} from './book.model';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,  
  })
  category_id?: number;

  @property({
    type: 'string',
    required: true,
    unique: true,  
  })
  genre: string;

  @hasMany(() => Book, {keyTo: 'category_id'})  
  books: Book[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

/** ✅ Add this missing export */
export interface CategoryRelations {
  books?: Book[];
}

export type CategoryWithRelations = Category & CategoryRelations;
