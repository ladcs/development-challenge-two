import { NextFunction, Request, Response } from 'express';

export interface IController {
  create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>,
  readAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  readOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
}
