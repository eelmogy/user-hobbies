import { Router } from 'express';
import HobbyController from './controllers/hobby.ctrl';
import UserController from './controllers/user.ctrl';
import * as Joi from '@hapi/joi';
import {
    ContainerTypes,
    // Use this as a replacement for express.Request
    ValidatedRequest,
    // Extend from this to define a valid schema type/interface
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
  } from 'express-joi-validation';

const userSchema = Joi.object({
    name: Joi.string().required()
  });

const hobbySchema = Joi.object({
name: Joi.string().required(),
passionLevel: Joi.string().required(),
year: Joi.number().required(),
userId: Joi.string().required()
});  
  
const validator = createValidator();
 
const HobbyRouter = Router();
HobbyRouter.get('/', HobbyController.getAll);
HobbyRouter.get('/:id', HobbyController.getOne);
HobbyRouter.get('/user-hobbies/:userId', HobbyController.getUserHobbies);
HobbyRouter.post('/', validator.body(hobbySchema), HobbyController.createHobby);
HobbyRouter.patch('/:id', validator.body(hobbySchema), HobbyController.updateHobby);
HobbyRouter.delete('/:id', HobbyController.deleteHobby);
export { HobbyRouter };

const UserRouter = Router();
UserRouter.get('/', UserController.getAll);
UserRouter.get('/:id', UserController.getOne);
UserRouter.post('/', validator.body(userSchema), UserController.createUser);
UserRouter.patch('/:id', validator.body(userSchema),  UserController.updateUser);
UserRouter.delete('/:id', UserController.deleteUser);
export { UserRouter };

const SwaggerAPIRouter = Router();
export { SwaggerAPIRouter };