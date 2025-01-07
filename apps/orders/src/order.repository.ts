import { Inject, Injectable, Logger } from "@nestjs/common";
import { Order } from "./schemas/order.schema";
import { AbstractRepository } from "@app/common";
import { Model } from "mongoose";
import { InjectConnection } from "@nestjs/mongoose";


@Injectable()
export class OrderRepository extends AbstractRepository<Order> {

    protected readonly logger = new Logger(OrderRepository.name);
    constructor(
        @Inject('OrderModel') private readonly orderModel: Model<Order>,
        @InjectConnection() protected readonly connection,
    ) {
        super(orderModel, connection);
    }

}