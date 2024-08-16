import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column({ name: 'email', length: 50, nullable: false, unique: true })
  email: string;

  @Column({ name: 'firstName', length: 100, nullable: false})
  firstName?: string;

  @Column({ name: 'lastName', length: 100, nullable: false })
  lastName: string;

  @Column({ name: 'middleName', length: 100, nullable: false, default: '' })
  middleName?: string;

  @Column({ name: 'password', type: 'text', nullable: false, unique: true })
  password?: string;

  @Column({ name: 'gender', length: 100, nullable: false })
  gender: string;

  @Column({ name: 'image', length: 100, nullable: false, default: '' })
  image?: string;

  @Column({ name: 'birthday', nullable: false })
  birthday: number;

  @Column({name: 'role',  length: 10, nullable: false, default: 'user'})
  role?: 'admin' | 'user';

  @Column({name: 'active',  type: 'boolean', default: true})
  active?: boolean;

}