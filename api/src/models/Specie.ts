import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('specie')
export default class Specie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
