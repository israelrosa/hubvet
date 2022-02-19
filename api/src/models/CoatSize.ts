import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coat_size')
export default class CoatSize {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
