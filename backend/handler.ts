import express from 'express';
import serverless from 'serverless-http';
import errorMiddleware from './src/middleware/error';

import PatientController from './src/controller/PatientsController';

const controller = new PatientController();

const app = express();

app.use(express.json());

app.get("/patient", controller.readAll);
app.post("/patient", controller.create);
app.get("/patient/:email", controller.readOne);
app.delete("/patient/:email", controller.delete);
app.patch("/patient/:email", controller.update);

app.use(errorMiddleware);

module.exports.handler = serverless(app);
