import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProductsController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { Product } from './product/entities/product.entity';


import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product, Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, Category]),
  ],
  controllers: [ProductsController, CategoryController],
  providers: [ProductService, CategoryService],
})
export class AppModule {}