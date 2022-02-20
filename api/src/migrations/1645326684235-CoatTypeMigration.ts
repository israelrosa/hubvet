import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CoatTypeMigration1645326684235
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const coatTypes = ['Lisa', 'Ondulada', 'Cacheada'];

    coatTypes.forEach(async coatType => {
      await queryRunner.query(
        `INSERT INTO "coat_type" ("name") VALUES ('${coatType}')`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "coat_type"`);
  }
}
