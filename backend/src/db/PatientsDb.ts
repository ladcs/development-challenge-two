import { UpdateItemCommand, UpdateItemCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "../libs/ddbClient";
import IPatient from "../interfaces/IPatient";
import ItensCRUD from "./ItensCRUD";

export default class PatientsDb extends ItensCRUD<IPatient> {
  constructor() {
    super("Patients");
  }

  update = async (email: string, obj: IPatient): Promise<null> => {
    try {
      const parms: UpdateItemCommandInput = {
        TableName: "Patients",
        Key: marshall({ email }),
        UpdateExpression: "SET address = :a, patientName = :P, birthDate = :B",
        ExpressionAttributeValues: marshall({
          ":a": obj.address,
          ":P": obj.patientName,
          ":B": obj.birthDate,
        }),
        ReturnValues:"UPDATED_NEW",
      };

      await ddbClient.send(new UpdateItemCommand(parms));
      return null
    } catch (error) {
      console.error(error);
      throw new Error("Method not implemented.");
    }
  };
}