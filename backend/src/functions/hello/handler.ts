import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import PatientsDb from '../../db/PatientsDb';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const db = new PatientsDb();
  const result = await db.create({ email: event.body.email,
    BirthDate: 'oi',
    PatientName: "johny",
    address: {number: 10, street: 'paul'}
  });
  return formatJSONResponse({
    message: `Hello ${event.body.email}, welcome to the exciting Serverless world!`,
    result,
  });
};

export const main = middyfy(hello);
