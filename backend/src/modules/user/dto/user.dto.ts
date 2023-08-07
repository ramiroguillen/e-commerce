import { IsDate, IsNotEmpty, IsOptional } from "class-validator";
import { RoleType } from "../type/user.type";

export class UserDTO {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  password!: string;
  @IsNotEmpty()
  role!: RoleType;
  @IsDate()
  @IsOptional()
  createdAt!: Date;
  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
