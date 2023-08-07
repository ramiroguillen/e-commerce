import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import CustomerEntity from "./customer.entity";
import ProductEntity from "./product.entity";
import { OrderStatusType } from "../../modules/order/type/order.type";

@Entity({ name: "order" })
class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;
  @OneToMany(() => ProductEntity, (product) => product.order)
  products!: ProductEntity[];
  @Column()
  notes?: string;
  @Column()
  total!: number;
  @Column({ type: "enum", enum: OrderStatusType, nullable: false })
  status!: OrderStatusType;
  @Column()
  payment!: boolean;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}

export default OrderEntity;
