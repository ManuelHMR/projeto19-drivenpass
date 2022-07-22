import { faker } from "@faker-js/faker";

export function createUser() {
    const user = {
        email: faker.internet.email(),
        password: `${faker.finance.account(10)}`,
      };
    return user;
};