import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import CustomerEntity from "../customer/customer.entity";
import ProductEntity from "../product/product.entity";

@Entity({ name: "order" })
class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  updatedAt!: Date;
  @Column()
  createdAt!: Date;
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;
  @OneToMany(() => ProductEntity, (product) => product.order)
  @JoinColumn({ name: "product_id" })
  products!: ProductEntity[];
  @Column()
  notes?: string;
  @Column()
  total!: number;
  @Column()
  status!: string;
}

export default OrderEntity;
