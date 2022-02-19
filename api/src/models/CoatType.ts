import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coat_type')
export default class CoatType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
