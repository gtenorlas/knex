const express = require("express");   
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/blog', blogRouter);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
