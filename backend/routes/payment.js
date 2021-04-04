const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY);

const { requireLogin } = require("../middlewares/requireLogin");

const router = express.Router();

router.post("/", requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "inr",
    source: req.body.token.id,
    description: "$5 for 5 credits",
  });

  req.user.credits += 5;
  await req.user.save();

  res.send({ success: true, user: req.user });
});

module.exports = router;
