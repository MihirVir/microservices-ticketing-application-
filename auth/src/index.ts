import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user.ts";
import { signInRouter } from "./routes/signin.ts";
import { signUpRouter } from "./routes/signup.ts";
import { signOutRouter } from "./routes/signout.ts";
import { errorHandler } from "./middlewares/error-handler.ts";
import { NotFoundError } from "./errors/not-found-error.ts";

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("connected to mongodb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => console.log("App is running on port 3000!"));
};

start();
