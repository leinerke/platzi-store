import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../entity/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 3;
  private products: ProductEntity[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 20,
      image: 'image2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 30,
      image: 'image3.jpg',
    },
  ];

  findAll(): ProductEntity[] {
    return this.products;
  }

  findOne(id: number): ProductEntity {
    return this.products.find((product) => product.id === id);
  }

  create(product: ProductEntity): ProductEntity {
    this.products.push({
      ...product,
      id: this.counterId++,
    });
    return product;
  }
}
