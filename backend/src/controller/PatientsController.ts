import { NextFunction, Request, Response } from 'express';
import CRUDItens from './CRUDItensController';
import { IController } from '../interfaces/IController';
import { Service } from '../interfaces/Service';
import PatientService from '../service/PatientService';
import IPatient from '../interfaces/IPatient';
import { StatusCodes } from 'http-status-codes';

export default class PatientController extends CRUDItens<IPatient> implements IController {
  protected _service: Service<IPatient>;

  constructor () {
    super();
    this._service = new PatientService();
  }

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<void | Response> => {
      try {
      const { email, patientName, birthDate, address } = req.body;
      const newPatient = await this._service.create({ email, patientName, birthDate, address });
      return res.status(StatusCodes.CREATED).json(newPatient);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  readAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<void | Response> => {
    try {
      const patients = await this._service.getAll();
      return res.status(StatusCodes.OK).json({patients, count: patients.length});
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  readOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<void | Response> => {
      try {
      const { email } = req.params;
      const patient = await this._service.getOne(email);
      return res.status(StatusCodes.OK).json(patient);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  update = async (
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<void | Response> => {
      try {
        const { email } = req.params;
        const { patientName, birthDate, address } = req.body;
        const updated = await this._service.update({email, patientName, birthDate, address});
        return res.status(StatusCodes.OK).json(updated)
      } catch (error) {
        next(error);
      }
  }

  delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<void | Response> => {
    try {
      const { email } = req.params;
      await this._service.delete(email);
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}