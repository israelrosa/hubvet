import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Specie from './Specie';

@Entity('breed')
export default class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  specie_id: string;

  @ManyToOne(() => Specie, sp => sp.breeds)
  @JoinColumn({ name: 'specie_id' })
  specie: Specie;
}
