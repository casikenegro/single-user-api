import * as Joi from 'joi';

const configSchema: any = Joi.object({
  NODE_ENV: Joi.string()
    .valid('dev', 'production', 'test', 'provision')
    .default('dev'),
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().default('secret'),
});

export default configSchema;
