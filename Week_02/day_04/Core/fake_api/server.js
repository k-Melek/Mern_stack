

// Bring EXPRESS

const express = require("express");

// Invoke EXPRESS (execute the function express) Save it to variable APP!

const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker');


fakeUsers = []; // Empty list for Fake USERS
fakeCompanies = [];// Empty list for Fake Companies 

fakeUserAndCompany = [];

const createUser = () => {
    const newUser = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName:  faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        companyId: faker.string.uuid(),
        name: faker.company.name(),
        address : {
                    street: faker.location.street(),
                    city: faker.location.city(),
                    state: faker.location.state(),
                    zipCode: faker.location.zipCode(),
                    country: faker.location.country ()
                    }
    };
    return newCompany;
};



// console.log(createFakeUser);

// ! ROUTE FOR CREATE ONE USER !
app.post("/api/users/new", (req, res) => {
    const createFakeUser = createUser();
    console.log(createFakeUser);
    fakeUsers.push(createFakeUser);
    res.json({
      message: "User Created ✅",
      user: createFakeUser,
    });
  });

  // ! ROUTE FOR CREATE ONE Company !

  app.post("/api/companies/new", (req, res) => {
    const createFakeCompany = createCompany();
    console.log(createFakeCompany);
    fakeCompanies.push(createFakeCompany);
    res.json({
      message: "Company Created ✅",
      company: createFakeCompany,
    });
  });

//! CReate User / company !

  app.post("/api/user/company", (req, res) => {
    const createFakeUser = createUser();
    const createFakeCompany = createCompany();
    console.log(createFakeUser);
    console.log(createFakeCompany);
    fakeUserAndCompany.push(createFakeUser)
    fakeUserAndCompany.push(createFakeCompany)

    res.json({
      message: "User & Company Created ✅",
      user: createFakeUser,
      company: createFakeCompany
    });
  });


//! Get route For ALL USERS LIST 

  app.get("/api/users", (req, res) => {
    res.json({ fakeUsers, status: 200 });
  });

  //! Get route For ALL Companies LIST 

  app.get("/api/companies", (req, res) => {
    res.json({ fakeCompanies, status: 200 });
  });

  //! Route Get ALL users / companies !

  app.get("/api/userscompanies", (req, res) => {
    res.json({ fakeUserAndCompany, status: 200 });
  });



// DEFINE PORT AS GLOBAL VARIABLE

const PORT = 3000

// RUN the sever 

app.listen(3000, () => {
    console.log(`Server ready on port ${PORT}`);
})