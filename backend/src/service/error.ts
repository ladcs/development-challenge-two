import emailSchema from '../schema/email';
import patientSchema from '../schema/Patient';
import addressSchema from '../schema/address';
import BadRequest from '../error/BadRequest';
import schemaBirthDate from '../schema/schemaBirthDate';

type schemaType = {
  address?: {
    number: number,
    street: string,
  }
  email?: string,
  birthDate?: string,
  patientName?: string,
}

export const emailValidate = (obj: schemaType) => {
  const validateEmail = emailSchema.safeParse(obj);
  if (!validateEmail.success) {
    const { issues } = validateEmail.error;
    const { message } = issues[0];
    throw new BadRequest(message);
  }
}

export const patientValidate = (obj: schemaType) => {
  emailValidate(obj);
  const { address, birthDate } = obj;
  if (!address) throw new BadRequest('address is required!');
  const validateAddress = addressSchema.safeParse(address);
  if (!validateAddress.success) {
    const { issues } = validateAddress.error;
    const { message } = issues[0];
    throw new BadRequest(message);
  }
  const validate = patientSchema.safeParse(obj);
  if (!validate.success) {
    const { issues } = validate.error;
    const { message } = issues[0];
    throw new BadRequest(message);
  }
  if (!birthDate) throw new BadRequest(JSON.stringify(obj));
  const newBirthDate = new Date(birthDate);
  const dateValidate = schemaBirthDate.safeParse({birthDate: newBirthDate});
  if (!dateValidate.success) {
    const { issues } = dateValidate.error;
    const { message } = issues[0];
    throw new BadRequest(message);
  }
}