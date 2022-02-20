import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Breed from './Breed';
import CoatSize from './CoatSize';
import CoatType from './CoatType';
import Pet from './Pet';
import Specie from './Specie';
import User from './User';

@Entity('pet_group')
export default class PetGroup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  specie_id: string;

  @Column()
  breed_id: string;

  @Column()
  coat_size_id: string;

  @Column()
  coat_type_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Pet, pet => pet.pet_group)
  pets: Pet[];

  @ManyToOne(() => User, user => user.pet_group)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Specie, specie => specie.pet_group)
  @JoinColumn({ name: 'specie_id' })
  specie: Specie;

  @ManyToOne(() => Breed, breed => breed.pet_group)
  @JoinColumn({ name: 'breed_id' })
  breed: Breed;

  @ManyToOne(() => CoatSize, cs => cs.pet_group)
  @JoinColumn({ name: 'coat_size_id' })
  coat_size: CoatSize;

  @ManyToOne(() => CoatType, ct => ct.pet_group)
  @JoinColumn({ name: 'coat_type_id' })
  coat_type: CoatType;
}
