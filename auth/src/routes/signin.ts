import express from "express";

const router = express.Router();

router.get("/api/users/signin", (req, res) => {
  res.send("This is sign in routes")
});

export { router as signInRouter }
