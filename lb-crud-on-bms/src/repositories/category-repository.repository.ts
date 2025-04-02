import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';

export class CategoryRepositoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.category_id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Category, dataSource);
  }
}
