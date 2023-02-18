import joi from "joi";

const Tutorial = joi.object({
  title: joi.string().min(3).max(250).required(),
  description: joi.string().required(),
  url: joi.string().uri().required(),
});

export default Tutorial;
