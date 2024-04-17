import express from "express";

const router = express.Router();

router.get("/api/users/signout", (req, res) => {
  res.send("This is sign out routes")
});

export { router as signOutRouter }
