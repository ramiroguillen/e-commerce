"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.createHashValue = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const createHashValue = async (value) => {
    const salt = await bcrypt_1.default.genSalt();
    return bcrypt_1.default.hashSync(value, salt);
};
exports.createHashValue = createHashValue;
const isValid = (value, encryptedValue) => {
    return bcrypt_1.default.compareSync(value, encryptedValue);
};
exports.isValid = isValid;
//# sourceMappingURL=crypt.js.map