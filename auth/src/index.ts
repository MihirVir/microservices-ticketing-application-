import express from "express";
import { json } from "body-parser";
import {currentUserRouter} from "./routes/current-user.ts";
import { signInRouter } from "./routes/signin.ts";
import { signUpRouter } from "./routes/signup.ts";
import { signOutRouter } from "./routes/signout.ts";

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.listen(3000, () => console.log("App is running on port 3000!"))
