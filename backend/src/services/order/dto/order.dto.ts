import { IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class OrderDTO {
  @IsOptional()
  id!: string;
  @IsOptional()
  notes?: string;
  @IsNotEmpty()
  total!: number;
  @IsNotEmpty()
  status!: string;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
