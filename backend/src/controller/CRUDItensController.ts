import { NextFunction, Request, Response } from "express";

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
}

export default abstract class Controller<T> {
  protected errors = ControllerErrors;

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract readAll(
    _req: Request,
    res: Response<T[] | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;

  abstract update(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
    next: NextFunction
  ): Promise<typeof res | void>;

  abstract delete(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
    next: NextFunction,
  ): Promise<typeof res | void>;
}