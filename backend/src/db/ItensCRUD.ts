import {
  DeleteItemCommand,
  DeleteItemCommandInput,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  GetItemCommand,
  GetItemCommandInput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { Record } from 'aws-sdk/clients/dynamodbstreams';

import { ddbDocClient } from '../libs/dynamoDbDocument';
import { PatientsDb } from '../interfaces/PatientsDbInterface';
import { ddbClient } from '../libs/ddbClient';

export default abstract class ItensCRUD<T> implements PatientsDb<T>{
  private _tableName: string;

  constructor(tableName:string) {
    this._tableName = tableName;
  }

  create = async(obj: T): Promise<PutItemCommandOutput> => {
    try {
      const input: PutItemCommandInput = {
        TableName: this._tableName,
        Item: marshall(obj),
      };
      const create = await ddbClient.send(new PutItemCommand(input));
      return create;
    } catch (error) {
      console.error(error);
      throw new Error("internal error")
    }
  }

  readAll = async(): Promise<Record[]> => {
    try {
      const query: ExecuteStatementCommandInput = {
        Statement: `SELECT * FROM ${this._tableName}`
      }
      const { Items } = await ddbDocClient.send(new ExecuteStatementCommand(query));
      if (!Items) return [];
      const data = Items.map(element => unmarshall(element));
      return data;
    } catch (error) {
      throw new Error(`SELECT * FROM ${this._tableName}`);
      console.error(error)
    }
  }

  readOne = async (email: string): Promise<Record | null> => {
    try {
      const paramsToGetPatient: GetItemCommandInput = {
        TableName: this._tableName,
        Key: marshall({ email }),
      };
      const { Item } = await ddbClient.send(new GetItemCommand(paramsToGetPatient));
      if (!Item) return null;
      return unmarshall(Item);
    } catch (error) {
      console.error(error)
      throw new Error("Method not implemented.");
    }
  }

  update = async (email: string, obj: T): Promise<null>  => {
    console.log(email + obj);  
    throw new Error("Method not implemented.");
  }

  delete = async (email: string): Promise<null> => {
    try {
      const toDelete: DeleteItemCommandInput = {
        TableName: this._tableName,
        Key: marshall({ email }),
      }
      await ddbClient.send(new DeleteItemCommand(toDelete));
      return null;
    } catch (error) {
      console.error(error);
      throw new Error("Method not implemented.");
    }
  }

}