exports.requireCredits = (req, res, next) => {
  if (!(req.users.credits < 1)) {
    return res
      .status(403)
      .send({ success: false, message: "you don't have enough credits" });
  }

  next();
};
