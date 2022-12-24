import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import PatientsDb from './src/db/PatientsDb';

const app = express();

app.use(express.json());

app.post("/users/", async (req: Request, res: Response) => {
  try {
    const db = new PatientsDb();
    const { email } = req.body;
    const result = await db.create({ email,
      BirthDate: 'oi',
      PatientName: "johny",
      address: {number: 10, street: 'paul'}
    });
    return res.status(200).json({
      message: `Hello ${email}, welcome to the exciting Serverless world!`,
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({error})
  }
});

module.exports.handler = serverless(app);
