const express = require("express");   
const userRouter = require("./routes/users");
const blogRouter = require("./routes/blog");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/users', userRouter);
app.use('/blog', blogRouter);\
