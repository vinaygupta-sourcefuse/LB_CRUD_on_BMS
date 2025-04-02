import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Author} from '../models';
import {AuthorRepositoryRepository} from '../repositories';

export class AuthorController {
  constructor(
    @repository(AuthorRepositoryRepository)
    public authorRepositoryRepository : AuthorRepositoryRepository,
  ) {}

  @post('/authors')
  @response(200, {
    description: 'Author model instance',
    content: {'application/json': {schema: getModelSchemaRef(Author)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Author, {
            title: 'NewAuthor',
            exclude: ['author_id'],
          }),
        },
      },
    })
    author: Omit<Author, 'author_id'>,
  ): Promise<Author> {
    return this.authorRepositoryRepository.create(author);
  }

  @get('/authors/count')
  @response(200, {
    description: 'Author model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Author) where?: Where<Author>,
  ): Promise<Count> {
    return this.authorRepositoryRepository.count(where);
  }

  @get('/authors')
  @response(200, {
    description: 'Array of Author model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Author, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Author) filter?: Filter<Author>,
  ): Promise<Author[]> {
    return this.authorRepositoryRepository.find(filter);
  }

  @patch('/authors')
  @response(200, {
    description: 'Author PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Author, {partial: true}),
        },
      },
    })
    author: Author,
    @param.where(Author) where?: Where<Author>,
  ): Promise<Count> {
    return this.authorRepositoryRepository.updateAll(author, where);
  }

  @get('/authors/{id}')
  @response(200, {
    description: 'Author model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Author, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Author, {exclude: 'where'}) filter?: FilterExcludingWhere<Author>
  ): Promise<Author> {
    return this.authorRepositoryRepository.findById(id, filter);
  }

  @patch('/authors/{id}')
  @response(204, {
    description: 'Author PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Author, {partial: true}),
        },
      },
    })
    author: Author,
  ): Promise<void> {
    await this.authorRepositoryRepository.updateById(id, author);
  }

  @put('/authors/{id}')
  @response(204, {
    description: 'Author PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() author: Author,
  ): Promise<void> {
    await this.authorRepositoryRepository.replaceById(id, author);
  }

  @del('/authors/{id}')
  @response(204, {
    description: 'Author DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.authorRepositoryRepository.deleteById(id);
  }
}
