import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import PetGroup from './PetGroup';

@Entity('coat_type')
export default class CoatType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => PetGroup, pg => pg.coat_type)
  pet_groups: PetGroup[];
}
