import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import CustomerEntity from "../customer/customer.entity";

@Entity({ name: "user" })
class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  firstName!: string;
  @Column()
  lastName!: string;
  @Column()
  @Unique(["email"])
  email!: string;
  @Column()
  password!: string;
  @Column()
  updatedAt!: Date;
  @Column()
  createdAt!: Date;
  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}

export default UserEntity;
