const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionReq", userAuth, (req, res) => {
  const user = req.user;
  res.send(user.firstName + " Send Connection Request");
});

module.exports = requestRouter;
