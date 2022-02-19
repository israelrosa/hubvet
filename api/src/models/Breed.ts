import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('breed')
export default class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
