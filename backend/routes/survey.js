const express = require('express');

const { requireCredits } = require('../middlewares/requireCredits');
const { requireLogin } = require('../middlewares/requireLogin');
const { template } = require('../services/template');
const Survey = require('../models/Survey');
const Mailer = require('../services/mailer');

const router = express.Router();

router.post('/', requireLogin, requireCredits, async (req, res) => {
  const { error } = Survey.validateCreateService(req.body);
  if (error) {
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });
  }
  try {
    const { title, body, subject, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map(ele => ({ email: ele.trim() })),
    });

    const mailer = new Mailer(survey, template(survey));
    await mailer.send();
    await survey.save();

    req.user.credits -= 1;

    await req.user.save();

    res.send({ success: true, user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

router.get('/thanks', (req, res) => {
  res.send('Thank you for your feedback');
});

module.exports = router;
