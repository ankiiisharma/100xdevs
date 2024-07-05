import { PrismaClient } from "@prisma/client";
import { create } from "domain";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

insertUser("4@gmail.com", "user4", "Sharma", "password");

// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: {
//       email: username,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }

// updateUser("ankit@testmail.com", {
//   firstName: "ankiii",
//   lastName: "Sharrmanaa",
// });

// async function deleteUser(username: string) {
//   const res = await prisma.user.delete({
//     where: {
//       email: username,
//     },
//   });
//   console.log(res);
// }

// deleteUser("ankit@testmail.com");
