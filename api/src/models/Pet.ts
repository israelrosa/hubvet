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
  intial_age: string;

  @Column()
  final_age: string;

  @Column()
  pet_group_id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => PetGroup, pg => pg.pets)
  @JoinColumn({ name: 'pet_group_id' })
  pet_group: PetGroup;

  @ManyToOne(() => User, user => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
