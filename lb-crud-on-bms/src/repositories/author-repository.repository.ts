import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Author, AuthorRelations} from '../models';

export class AuthorRepositoryRepository extends DefaultCrudRepository<
  Author,
  typeof Author.prototype.author_id,
  AuthorRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Author, dataSource);
  }
}
