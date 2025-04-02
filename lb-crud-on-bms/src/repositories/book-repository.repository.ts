import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Book, BookRelations} from '../models';

export class BookRepositoryRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.isbn,
  BookRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Book, dataSource);
  }
}
