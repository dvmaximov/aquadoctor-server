import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('aquadoctor') 
export class Aquadoctor {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column({ name: 'userId', nullable: false})
  userId: number;
  
  @Column({ name: 'musikId', nullable: false})
  musikId: number;
  
  @Column({ name: 'diagnosticId', nullable: false})
  diagnosticId: number;
  
  @Column({ name: 'userDiagnosticId', nullable: false})
  userDiagnosticId: number;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'musikPath', length: 100, nullable: false })
  musikPath: string;
  
  @Column({ name: 'created', nullable: false})
  created: number;
  
  @Column({ name: 'startDate', nullable: false})
  startDate: number;
  
  @Column({ name: 'endDate', nullable: false})
  endDate: number;
  
  @Column({ name: 'color1', type: 'text', nullable: false })
  color1: string;
  
  @Column({ name: 'color2', type: 'text', nullable: false })
  color2: string;
  
  @Column({ name: 'color3', type: 'text', nullable: false })
  color3: string;
  
  @Column({ name: 'active', type: 'boolean', default: false })
  active?: boolean;

  @Column({ name: 'metaData', type: 'text', default: '{}' })
  metaData: string;  
}
