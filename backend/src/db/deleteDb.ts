import { DeleteTableCommand, DeleteTableCommandInput } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../libs/ddbClient";

const paramsToDeleteTable: DeleteTableCommandInput = {
  TableName: "Patients",
};

export const deleteTable = async () => {
  try {
    const data = await ddbClient.send(new DeleteTableCommand(paramsToDeleteTable));
    console.log("Success, table deleted", data);
    return data;
  } catch (err) {
      console.log("Error", err);
    }
};

deleteTable();