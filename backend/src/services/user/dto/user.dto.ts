import { IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class UserDTO {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  password!: string;
  @IsNotEmpty()
  role!: string;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
