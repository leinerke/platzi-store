import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `product: limit=>${limit}, offset=>${offset}, brand=>${brand}`,
    };
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return {
      message: `product ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create product',
      payload,
    };
  }
}
