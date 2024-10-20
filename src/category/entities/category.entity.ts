import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Length } from 'class-validator';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  @Length(1, 50)
  name: string;

  @Column({ length: 250, nullable: true })
  @Length(1, 250)
  image_link: string;

  
  @CreateDateColumn({ type: 'timestamp' })
  created_date: Date;

  
  @UpdateDateColumn({ type: 'timestamp' })
  updated_date: Date;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
