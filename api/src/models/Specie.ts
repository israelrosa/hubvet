import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Breed from './Breed';
import PetGroup from './PetGroup';

@Entity('specie')
export default class Specie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Breed, br => br.specie)
  breeds: Breed[];

  @OneToMany(() => PetGroup, pg => pg.specie)
  pet_groups: PetGroup[];
}
