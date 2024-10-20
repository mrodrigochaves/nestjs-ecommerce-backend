import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 10 })
  sku: string;

  @ManyToOne(() => Category, category => category.products)
  category: Category;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 500 })
  large_description: string;

  @Column('decimal')
  price: number;

  @Column('decimal', { nullable: true })
  discount_price: number;

  @Column({ nullable: true })
  discount_percent: number;

  @Column({ default: false })
  is_new: boolean;

  @Column({ length: 250, nullable: true })
  image_link: string;

  @Column({ length: 1000, nullable: true })
  other_images_link: string;

  @Column()
  
  @CreateDateColumn({ type: 'timestamp' })
  created_date: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_date: Date;
}