import bcrypt from "bcrypt";

export const createHashValue = async (value: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hashSync(value, salt);
};

export const isValid = (value: string, encryptedValue: string) => {
  return bcrypt.compareSync(value, encryptedValue);
};
