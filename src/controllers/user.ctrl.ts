import { Request, Response } from 'express';
import userSrvc, { default as UserService } from '../services/user.srvc';

class UserController {
  async getAll(req: Request, resp: Response) {
    try {
      const users = await UserService.findAll();
      resp.status(200).send(users);
    } catch (error) {
      resp.send(error);
    }
  }

  async createUser (req: Request, resp: Response) {
    try {
      const users = await UserService.save({
        name: req.body.name,
      });
      resp.status(200).send(users);
    } catch (error) {
      resp.send(error);
    }
  }

  async getOne(req: Request, resp: Response) {
    try {
      const user = await UserService.findById(req.params.id);
      resp.status(200).send(user);
    } catch (error) {
      resp.send(error);
    }
  }

  async updateUser (req: Request, resp: Response) {
    try {
      const existingUser = await UserService.findById(req.params.id);
      if ( !existingUser ) {
        return ;
      }

      const user = await UserService.update(req.params.id , {
        name: req.body.name,
      });
      resp.status(200).send(user);
    } catch (error) {
      resp.send(error);
    }
  }

  async deleteUser (req: Request, resp: Response) {
    try {
      const existingUser = await UserService.findById(req.params.id);
      if ( !existingUser ) {
        return ;
      }

      const user = await UserService.delete(req.params.id);
      resp.status(200).send(user);
    } catch (error) {
      resp.send(error);
    }
  }
}

export default new UserController();