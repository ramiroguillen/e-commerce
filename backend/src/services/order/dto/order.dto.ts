import { IsDate, IsNotEmpty, IsOptional } from "class-validator";
import { OrderStatus } from "../type/order.type";

export class OrderDTO {
  @IsOptional()
  id!: string;
  @IsOptional()
  notes?: string;
  @IsNotEmpty()
  total!: number;
  @IsNotEmpty()
  status!: OrderStatus;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
