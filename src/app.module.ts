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
      type: "postgres",
      host: "45.136.16.12",
      port: 5432,
      username: "postgres",
      password: "IVetyPsToR",
      database: "postgres",
      entities: [Product, Category],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Product, Category]),
  ],
  controllers: [ProductsController, CategoryController],
  providers: [ProductService, CategoryService],
})
export class AppModule {}