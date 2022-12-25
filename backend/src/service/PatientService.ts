import { Service } from '../interfaces/Service';
import PatientsDb from '../db/PatientsDb';
import IPatient from '../interfaces/IPatient';
import ItensCRUD from '../db/ItensCRUD';
import BadRequest from '../error/BadRequest';
import { emailValidate, patientValidate } from './error';
import NotFound from '../error/NotFound';

export default class PatientService implements Service<IPatient> {
  private _db: ItensCRUD<IPatient>

  constructor() {
    this._db = new PatientsDb();
  }

  async getOne(email: string): Promise<IPatient> {
    emailValidate({ email });
    const patient = await this._db.readOne(email);
    if (!patient) throw new NotFound("Patient not found");
    return patient as unknown as IPatient;
  }

  async create(obj: IPatient): Promise<IPatient> {
    const { email } = obj;
    if (!email) throw new BadRequest('email is required!');
    patientValidate(obj);
    await this._db.create(obj);
    const newPatient = await this.getOne(email);
    return newPatient as unknown as IPatient;
  }

  async getAll(): Promise<IPatient[]> {
    const allPatients = await this._db.readAll();
    return allPatients as unknown as IPatient[];
  }

  async update(obj: IPatient): Promise<IPatient> {
    const { email, ...updatePatient } = obj;
    if (!email) throw new BadRequest('email is required!');
    patientValidate(obj);
    await this._db.update(email, updatePatient);
    const upload = await this._db.readOne(email);
    return upload as unknown as IPatient;
  }

  async delete(email: string): Promise<null> {
    emailValidate({ email });
    await this._db.delete(email);
    return null;
  }
}
