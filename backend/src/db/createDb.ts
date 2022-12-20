import { CreateTableCommand, CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../libs/ddbClient"

const tablePatients: CreateTableCommandInput = {
  TableName: "Patients",
  AttributeDefinitions: [{
    AttributeName: "email",
    AttributeType: "S",
  }],
  KeySchema: [{
    AttributeName: "email",
    KeyType: "HASH"
  }],
  ProvisionedThroughput: {       
    ReadCapacityUnits: 10, 
    WriteCapacityUnits: 100
  }
}

const createTablePatients = async function () {
  try {
      const results = await ddbClient.send(new CreateTableCommand(tablePatients));
      console.log(results)
  } catch(err) {
      console.error(err)
  }
};

createTablePatients();