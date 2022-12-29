import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

import errorMiddleware from './src/middleware/error';
import Controller from './src/controller/PatientsController';

const controller = new Controller()

const app = express();

app.use(express.json());
app.use(cors());
app.get("/patient", controller.readAll);
app.post("/patient", controller.create);
app.get("/patient/:email", controller.readOne);
app.delete("/patient/:email", controller.delete);
app.patch("/patient/:email", controller.update);
app.use(errorMiddleware);

module.exports.handler = serverless(app);
