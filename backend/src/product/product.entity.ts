import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import OrderEntity from "../order/order.entity";

@Entity({ name: "product" })
class ProductEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  updatedAt!: Date;
  @Column()
  createdAt!: Date;
  @ManyToOne(() => OrderEntity, (order) => order.products)
  @JoinColumn({ name: "order_id" })
  order!: OrderEntity;
}

export default ProductEntity;
