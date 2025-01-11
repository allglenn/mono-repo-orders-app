import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  async createOrder(
    @Body() CreateOrderRequest: CreateOrderRequest,
  ) {
    return await this.ordersService.createOrder(CreateOrderRequest);
  }


}
