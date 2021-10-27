import { NextFunction, Request, Response } from "express";
import CardService from "@services/cards.service";
import { CreateCardDto } from "@dtos/cards.dto";
import { Card } from "@interfaces/cards.interface";
import path from "path";
import * as fs from "fs";

class CardsController {
  public cardService = new CardService();

  // public getUsers = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const findAllUsersData: User[] = await this.userService.findAllUser();
  //
  //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public getUserById = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const findOneUserData: User = await this.userService.findUserById(userId);
  //
  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cardData: CreateCardDto = req.body;
      cardData.img = fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename));
      const createCardData: Card = await this.cardService.createCard(cardData);

      res.status(201).json({ data: createCardData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  // public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const userData: CreateUserDto = req.body;
  //     const updateUserData: User = await this.userService.updateUser(userId, userData);
  //
  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  //
  // public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const deleteUserData: User = await this.userService.deleteUser(userId);
  //
  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default CardsController;
