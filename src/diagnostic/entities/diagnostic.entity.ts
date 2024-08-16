import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('diagnostics') 
export class Diagnostic {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'created', nullable: false })
  created: number;

  @Column({ name: 'userId', nullable: false })
  userId: number;

  @Column({ name: 'diagnosticId', nullable: false })
  diagnosticId: number;

  @Column("text", { name: 'hr', nullable: false, default: "[]" })
  hr: string;

  @Column("text", { name: 'br', nullable: false, default: "[]" })
  br: string;

  @Column("text", { name: 'cardioSignal', nullable: false, default: "[]" })
  cardioSignal: string;

  @Column("text", { name: 'hrSingleSignal', nullable: false, default: "[]" })
  hrSingleSignal: string;

  @Column("text", { name: 'brSingleSignal', nullable: false, default: "[]" })
  brSingleSignal: string;
  
  @Column({ name: 'ifi', nullable: false, default: 0 })
  ifi: number;
  
  @Column({ name: 'bsi', nullable: false, default: 0 })
  bsi: number;
  
  @Column({ name: 'lf2hf', nullable: false, default: 0 })
  lf2hf: number;

  @Column("text", { name: 'ci', nullable: false, default: "[]" })
  ci: string;  

  @Column("text", { name: 'vpg', nullable: false, default: "[]" })
  vpg: string;
  
  @Column({ name: 'weightKg', nullable: false, default: 0 })
  weightKg: number;  
  
  @Column({ name: 'heightM', nullable: false, default: 0 })
  heightM: number;  
  
  @Column({ name: 'sadMMHg', nullable: false, default: 0 })
  sadMMHg: number;  
  
  @Column({ name: 'dadMMHg', nullable: false, default: 0 })
  dadMMHg: number;  
}
