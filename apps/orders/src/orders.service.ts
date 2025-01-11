import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly OrderRepository: OrderRepository) {}

  async createOrder(createOrderRequest: CreateOrderRequest) {
    return await this.OrderRepository.create(createOrderRequest);
  }

}
