const express = require("express");
const { userAuth } = require("../middlewares/auth");
const profileRouter = express.Router();

profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("User does not exist");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("Error " + error);
  }
});

module.exports = profileRouter;
