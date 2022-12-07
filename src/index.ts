import { faker } from "@faker-js/faker";
import express from "express";
const app = express();
const port = 3000;

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};

app.get("/", (req, res) => {
  res.send("Check your URL");
});
app.get("/api/users/new", (req, res) => {
  let newUser: object = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  let newCompany: object = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  let newUser: object = createUser();
  let newCompany: object = createCompany();
  res.json({ newUser, newCompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
