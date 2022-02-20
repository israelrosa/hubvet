import { MigrationInterface, QueryRunner } from 'typeorm';

export default class BreedMigration1645327331992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const specieBreeds = [
      {
        specie: 'Canina',
        breeds: [
          'Cão afegão',
          'Dachshund',
          'Labrador Retriever',
          'Cão de água português',
          'Akita',
          'Doberman',
          'Pinscher',
        ],
      },
      {
        specie: 'Felina',
        breeds: [
          'Angorá',
          'Ashera',
          'Balinês',
          'Bengal',
          'Bobtail americano',
          'Bobtail japonês',
          'Bombay',
          'Burmês',
          'Burmês vermelho',
          'Chartreux',
        ],
      },
    ];

    specieBreeds.forEach(async ({ breeds, specie }) => {
      const [specieId] = await queryRunner.query(
        `SELECT id FROM "specie" WHERE name='${specie}'`,
      );
      breeds.forEach(async breed => {
        await queryRunner.query(
          `INSERT INTO "breed" ("name", "specie_id") VALUES ('${breed}', '${specieId.id}')`,
        );
      });
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "breed"`);
  }
}
