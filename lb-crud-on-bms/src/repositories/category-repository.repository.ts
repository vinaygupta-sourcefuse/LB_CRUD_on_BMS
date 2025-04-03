import {inject} from '@loopback/core';
// import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';
import {SequelizeCrudRepository} from '@loopback/sequelize';

export class CategoryRepositoryRepository extends SequelizeCrudRepository<
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
