exports.requireLogin = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({ success: false, message: "You must be logged in" });
  }

  next();
};
