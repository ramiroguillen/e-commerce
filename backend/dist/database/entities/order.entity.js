"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const customer_entity_1 = __importDefault(require("./customer.entity"));
const product_entity_1 = __importDefault(require("./product.entity"));
const order_type_1 = require("../../services/order/type/order.type");
let OrderEntity = class OrderEntity {
    id;
    customer;
    products;
    notes;
    total;
    status;
    createdAt;
    updatedAt;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.default, (customer) => customer.orders),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.default)
], OrderEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.default, (product) => product.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: order_type_1.OrderStatus, nullable: false }),
    __metadata("design:type", String)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "updatedAt", void 0);
OrderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "order" })
], OrderEntity);
exports.default = OrderEntity;
//# sourceMappingURL=order.entity.js.map