import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProductsService } from '../../service/products/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductsDto, UpdateProductsDto } from '../../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /*return {
      message: `product: limit=>${limit}, offset=>${offset}, brand=>${brand}`,
    };
     */

    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    /*
    return {
      message: `product ${id}`,
    };
     */

    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductsDto) {
    /*
    return {
      message: 'create product',
      payload,
    };
     */

    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductsDto) {
    return {
      message: `update product ${id} with payload ${JSON.stringify(payload)}`,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return {
      message: `delete product ${id}`,
    };
  }
}
