const express = require('express');
const cors = require('cors');

const postRouter = require('./routers/post-router');
const userRouter = require('./routers/user-router');

const app = express();

app.use(cors());
app.use(express.json());

api.get("/", (req, res) => {
    res.json({
        name: "Discretion",
        description: "Send and receive private messages."
    })
})

api.use("/posts", postRouter);
api.use("/users", userRouter);

module.exports = app;