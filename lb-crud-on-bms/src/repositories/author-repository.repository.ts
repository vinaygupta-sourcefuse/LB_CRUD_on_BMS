import {inject} from '@loopback/core';
// import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Author, AuthorRelations} from '../models';
import {SequelizeCrudRepository} from '@loopback/sequelize';

export class AuthorRepositoryRepository extends SequelizeCrudRepository<
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
