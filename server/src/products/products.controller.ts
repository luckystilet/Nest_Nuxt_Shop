import { Controller, Get } from '@nestjs/common'

@Controller()
export class ProductsController {
  constructor() {}
  /**  */
  @Get('products')
  getProducts() {
    return 'Test'
  }
}
