import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
  })
  author_id?: number;

  @property({
    type: 'number',
  })
  category_id?: number;

  @property({
    type: 'date',
    required: true,
  })
  pubDate: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  isbn: number;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
