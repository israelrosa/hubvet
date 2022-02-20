import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PetGroup from './PetGroup';
import User from './User';

@Entity('pet')
export default class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  initial_age: number;

  @Column()
  final_age: number;

  @Column()
  pet_group_id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => PetGroup, pg => pg.pets)
  @JoinColumn({ name: 'pet_group_id' })
  pet_group: PetGroup;

  @ManyToOne(() => User, user => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
