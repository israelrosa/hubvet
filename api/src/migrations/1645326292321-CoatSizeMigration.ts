import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CoatSizeMigration1645326292321
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const coatSizes = ['Curta', 'Média', 'Longa'];

    coatSizes.forEach(async coatSize => {
      await queryRunner.query(
        `INSERT INTO "coat_size" ("name") VALUES ('${coatSize}')`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "coat_size"`);
  }
}
