import bcrypt from "bcrypt";

export const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (plainPass: string, hashWord: string): boolean =>
  bcrypt.compareSync(plainPass, hashWord);
