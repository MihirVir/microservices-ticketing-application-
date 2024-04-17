import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("This is current user routes")
});

export { router as currentUserRouter }
