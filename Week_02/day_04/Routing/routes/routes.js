// ************************ ROUTING ***************************

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" },
];

//- -------------------CRUD------------------------
// ! SAME ROUTES DIFFERENT VERBS
// ! ALL server routes must start with /api

module.exports = (app) => {
  // 0- READ ALL
  app.get("/api/users", (req, res) => {
    res.json({ users, status: 200 });
  });

  // 1- READ ONE BY INDEX

  app.get("/api/users/:id", (req, res) => {
    // console.log(req.params,"*****************************");
    const { id } = req.params;
    res.json(users[id]);
  });

  // 3- Create USER

  app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({
      message: "User Created ✅",
    });
  });

  // 4-DELETE USER By Index
  app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const deletedUser = users[req.params.id];

    console.log(users.splice(id, 1));
    res.json({
      deletedUser,
      message: "USER DELETED 🛑🛑🛑",
    });
  });

  // 5-UPDATE USER BY Index
  app.put("/api/users/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);

    users[req.params.id] = { ...users[req.params.id], ...req.body };

    res.json({
      message: "User updated 🎯🎯🎯",
    });
  });
};
