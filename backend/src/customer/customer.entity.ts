import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import UserEntity from "../user/user.entity";
import OrderEntity from "../order/order.entity";

@Entity({ name: "customer" })
class CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  updatedAt!: Date;
  @Column()
  createdAt!: Date;
  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;
  @OneToMany(() => OrderEntity, (order) => order.customer)
  @JoinColumn({ name: "order_id" })
  orders!: OrderEntity[];
  @Column()
  location!: string;    
}

export default CustomerEntity;
