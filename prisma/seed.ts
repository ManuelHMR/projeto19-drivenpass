import { prisma } from "../src/config/database";
import { createUser } from "../tests/factories/userFactory";

async function main() {
    const user = createUser();
    console.log({user})
    await prisma.users.create({
        data: user as any
    })
};

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async() => await prisma.$disconnect());
