import { IsDate, IsNotEmpty, IsOptional } from "class-validator";
import { OrderStatusType } from "../type/order.type";

export class OrderDTO {
  @IsOptional()
  id!: string;
  @IsOptional()
  notes?: string;
  @IsNotEmpty()
  total!: number;
  @IsNotEmpty()
  status!: OrderStatusType;
  @IsNotEmpty()
  payment!: boolean;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
