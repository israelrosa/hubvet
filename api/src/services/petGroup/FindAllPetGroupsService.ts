import { getManager, EntityManager } from 'typeorm';
import PetGroup from 'models/PetGroup';
import ErrorHandler from 'utils/ErrorHandler';

interface PetGroupParams {
  sort_by: string;
  sort_order: string;
  search: string;
  skip: number;
  limit: number;
  user_id: string;
}

interface PetGroupResponse {
  items: PetGroup[];
  total: number;
  has_more: boolean;
}

export default class FindAllPetGroupsService {
  private entityManager: EntityManager;

  constructor() {
    this.entityManager = getManager();
  }

  async exec({
    search,
    sort_by,
    sort_order,
    limit,
    skip,
    user_id,
  }: PetGroupParams): Promise<PetGroupResponse> {
    const orders = ['ASC', 'DESC'];
    const sorts = ['species', 'breeds', 'coat_types', 'coat_sizes', 'pets'];

    const query = this.entityManager
      .getRepository<PetGroup>('pet_group')
      .createQueryBuilder('group')
      .leftJoinAndSelect(
        'group.specie',
        'species',
        'species.id = group.specie_id',
      )
      .leftJoinAndSelect('group.breed', 'breeds', 'breeds.id = group.breed_id')
      .leftJoinAndSelect(
        'group.coat_type',
        'coat_types',
        'coat_types.id = group.coat_type_id',
      )
      .leftJoinAndSelect(
        'group.coat_size',
        'coat_sizes',
        'coat_sizes.id = group.coat_size_id',
      )
      .leftJoinAndSelect('group.pets', 'pets', 'pets.pet_group_id = group.id')
      .where('group.user_id = :user_id', { user_id })
      .take(limit || 10)
      .skip(skip || 0);

    if (search !== 'undefined') {
      query
        .where('species.name ilike :name', { name: `%${search}%` })
        .orWhere('breeds.name ilike :name', { name: `%${search}%` })
        .orWhere('pets.name ilike :name', { name: `%${search}%` });
    }

    if (sort_order !== 'undefined' && sort_by !== 'undefined') {
      if (!orders.includes(sort_order)) {
        throw new ErrorHandler({
          id: 'invalid_query',
          message: `Sort order ${sort_order} is an invalid argument`,
          status_code: 422,
        });
      }
      if (!sorts.includes(sort_by)) {
        throw new ErrorHandler({
          id: 'invalid_query',
          message: `Sort by ${sort_by} is an invalid argument`,
          status_code: 422,
        });
      }
      query.orderBy(`${sort_by}.name`, sort_order as 'ASC' | 'DESC');
    }

    const [items, total] = await query.getManyAndCount();
    const has_more = items.length < total;

    return { items, total, has_more };
  }
}
