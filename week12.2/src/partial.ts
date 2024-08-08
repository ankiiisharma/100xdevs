interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type updateProps1 = Pick<User, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<updateProps>;

function updateUser(updateProps1: updateProps1) {
  // /hhshdk
}

updateUser({
  name: "asd",
});
