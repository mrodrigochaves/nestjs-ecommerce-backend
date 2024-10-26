import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 10 })
  sku: string;

  @Column({ name: 'categoryId' }) // Alterado para match com o diagrama ER
  category_id: number;

  @ManyToOne(() => Category, category => category.products) // Corrigido para products
  @JoinColumn({ name: 'categoryId' }) // Adicionado JoinColumn
  category: Category;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 500 })
  large_description: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Adicionado precision e scale
  price: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  discount_price: number;

  @Column({ nullable: true })
  discount_percent: number;

  @Column({ default: false })
  is_new: boolean;

  @Column({ length: 250, nullable: true })
  image_link: string;

  @Column({ length: 1000, nullable: true })
  other_images_link: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_date: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_date: Date;
}
