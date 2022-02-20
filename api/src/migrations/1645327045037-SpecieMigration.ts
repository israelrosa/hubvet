import { MigrationInterface, QueryRunner } from 'typeorm';

export default class SpecieMigration1645327045037
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const species = ['Canina', 'Felina'];

    species.forEach(async specie => {
      await queryRunner.query(
        `INSERT INTO "specie" ("name") VALUES ('${specie}')`,
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "specie"`);
  }
}
