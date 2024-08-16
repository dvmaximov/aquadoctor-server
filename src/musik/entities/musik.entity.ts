import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('musik') 
export class Musik {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column({ name: 'name', type:'text', nullable: false, unique: true })
  name: string;

  @Column({ name: 'path', length: 100, nullable: false, unique: true})
  path?: string;

  @Column({ name: 'description', type:'text', default: '' })
  description?: string;
  
  @Column({ name: 'created', nullable: false})
  created: number;
}