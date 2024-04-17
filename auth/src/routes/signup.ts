import express from "express";

const router = express.Router();

router.get("/api/users/signup", (req, res) => {
  res.send("This is sign up routes")
});

export { router as signUpRouter }
