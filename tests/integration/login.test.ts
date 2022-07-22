import app from "./../../src/app";
import supertest from "supertest";
import { prisma } from "../../src/config/database";

// beforeEach(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE "Users" RESTART IDENTITY CASCADE`;
// });
  
afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users" RESTART IDENTITY CASCADE`;
    await prisma.$disconnect();
});

const USER = {
    email: "teste@teste.com",
    password: "1234567890"
}

describe("POST /signup", ()=> {
    it("create user", async ()=> {
        const response = await supertest(app).post("/signup").send(USER);
        expect(response.statusCode).toBe(201);
    });
    it("create a user with an email already in use", async ()=> {
        const response = await supertest(app).post("/signup").send(USER);
        expect(response.statusCode).toBe(409);
    });
});

describe("POST /signin", ()=> {
    it("login with valid credentials", async ()=> {
        const response = await supertest(app).post("/signin").send(USER)
        const token = response.body.token;
        expect(token).not.toBeNull();
    });
    it("login without valid credentials", async ()=> {
        const response = await supertest(app).post("/signin").send({...USER, password: "0000000000"})
        expect(response.statusCode).toBe(400);
    });
});

