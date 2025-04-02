import {Entity, model, property, hasMany} from '@loopback/repository';
import {Book} from './book.model';

@model()
export class Author extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,  
  })
  author_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @hasMany(() => Book, {keyTo: 'author_id'})  
  books: Book[];

  constructor(data?: Partial<Author>) {
    super(data);
  }
}

/** ✅ Add this missing export */
export interface AuthorRelations {
  books?: Book[];
}

export type AuthorWithRelations = Author & AuthorRelations;
