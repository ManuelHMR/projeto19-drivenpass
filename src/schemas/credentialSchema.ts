import joi, { string } from 'joi';

const credentialSchema = joi.object({
  password: joi.string().required(),
  url: joi.string().uri().required(), 
  name: joi.string().required(),
  title: joi.string().required()
});

export default credentialSchema;