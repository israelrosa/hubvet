import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import PetGroup from './PetGroup';

@Entity('coat_size')
export default class CoatSize {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => PetGroup, pg => pg.coat_size)
  pet_groups: PetGroup[];
}
