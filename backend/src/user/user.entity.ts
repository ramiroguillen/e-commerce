import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}

export default UserEntity;
