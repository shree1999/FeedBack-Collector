const mongoose = require("mongoose");
const Joi = require("joi");

const recipientSchema = require("./Recipient");

const surveySchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    recipients: [recipientSchema],
    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

surveySchema.statics.validateCreateService = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5),
    subject: Joi.string().required(),
    body: Joi.string().required(),
    recipients: Joi.string().required(),
  });

  return schema.validate(data);
};

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
