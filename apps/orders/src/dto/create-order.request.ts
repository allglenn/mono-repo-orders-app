import { Prop } from '@nestjs/mongoose';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderRequest {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;


    
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}
