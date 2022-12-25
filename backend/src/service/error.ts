import emailSchema from '../schema/email';
import patientSchema from '../schema/Patient';
import addressSchema from '../schema/address';
import BadRequest from '../error/BadRequest';

type schemaType = {
  address?: {
    number: number,
    street: string,
  }
  email?: string,
  birthData?: string,
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
  const { address } = obj;
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
}