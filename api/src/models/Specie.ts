import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Breed from './Breed';

@Entity('specie')
export default class Specie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Breed, br => br.specie)
  breeds: Breed[];
}
