import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as util from 'util';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import { User } from '../models/user';
import { default as HobbyService } from '../services/hobby.srvc';

class HobbyController {

  async getAll(req: Request, resp: Response) {
    try {
      const hobbies = await HobbyService.findAll();
      resp.status(200).send(hobbies);
    } catch (error) {
      resp.send(error);
    }
  }

  async getOne(req: Request, resp: Response) {
    try {
      const hobby = await HobbyService.findById(req.params.id);
      resp.status(200).send(hobby);
    } catch (error) {
      resp.send(error);
    }
  }

  async getUserHobbies(req: Request, resp: Response) {
    try {
      const hobby = await HobbyService.findByUser(req.params.userId);
      resp.status(200).send(hobby);
    } catch (error) {
      resp.send(error);
    }
  }

  async createHobby (req: Request, resp: Response) {
    try {
      const hobby = await HobbyService.save({
        name: req.body.name,
        passionLevel: req.body.passionLevel,
        year: req.body.year,
        userId: req.body.userId
      });
      resp.status(200).send(hobby);
    } catch (error) {
      resp.send(error);
    }
  }

  async updateHobby (req: Request, resp: Response) {
    try {
      const existingHobby = await HobbyService.findById(req.params.id);
      if ( !existingHobby ) {
        return ;
      }

      const hobby = await HobbyService.update(req.params.id , {
        name: req.body.name,
        passionLevel: req.body.passionLevel,
        year: req.body.year,
        userId: req.body.userId
      });
      resp.status(200).send(hobby);
    } catch (error) {
      resp.send(error);
    }
  }

  async deleteHobby (req: Request, resp: Response) {
    try {
      const existingHobby = await HobbyService.findById(req.params.id);
      if ( !existingHobby ) {
        return ;
      }

      const hobby = await HobbyService.delete(req.params.id);
      resp.status(200).send(hobby);
    } catch (error) {
      resp.send(error);
    }
  }

}

export default new HobbyController();