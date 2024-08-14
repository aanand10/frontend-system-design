import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json()); // using it as a middlewear

app.all("/", (req, res) => {
  //   console.log("request", req);
  //   console.log(("response", res));
  res.send(`I'm up!`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    compeleted: false,
  },
  {
    id: "2",
    title: "Task 2",
    compeleted: false,
  },
];

//READ
app.get("/todos", (req, res) => {
  res.json(todos);
});
// CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  console.log(newTodo);
  todos.push(newTodo);
  res.status(201).json({
    message: "new todo added!",
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newToDoData = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((item) => item.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...newToDoData,
    };
  }
  res.json({
    message: "todo updated successfully",
  });
});

// DELETE

app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((item) => item.id === todoParamId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.json({
      message: "todo deleted successfully",
    });
  } else {
    res.json({
      message: "umm h! item with you id not found",
    });
  }
});

const PORT = 1010;
app.listen(PORT, () => {
  console.log(`servar is running at port ${PORT}`);
});
