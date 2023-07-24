import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import CustomerEntity from "./customer.entity";
import { RoleType } from "../../services/user/type/user.type";

@Entity({ name: "user" })
class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  @Unique(["email"])
  email!: string;
  @Column({ select: false })
  password!: string;
  @Column({ type: "enum", enum: RoleType, nullable: false })
  role!: RoleType;
  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}

export default UserEntity;
