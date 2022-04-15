export class CreateProductsDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductsDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
