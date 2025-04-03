import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
// import {juggler} from '@loopback/repository';
import {SequelizeDataSource} from '@loopback/sequelize'


const config = {
  name: 'mysql',
  connector: 'mysql',
  url: 'mysql://vinay:password@localhost/bms',
  host: 'localhost',
  port: 3306,
  user: 'vinay',
  password: 'password',
  database: 'bms'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDataSource extends SequelizeDataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
