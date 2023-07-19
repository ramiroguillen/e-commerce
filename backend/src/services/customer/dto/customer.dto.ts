import { IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class CustomerDTO {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  firstName!: string;
  @IsNotEmpty()
  lastName!: string;
  @IsNotEmpty()
  address!: string;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}