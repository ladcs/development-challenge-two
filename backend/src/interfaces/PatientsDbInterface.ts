import { PutItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Record } from "aws-sdk/clients/dynamodbstreams";

export interface PatientsDb<T> {
  create(obj: T): Promise<PutItemCommandOutput>,
  readAll(): Promise<Record[]>,
  readOne(email: string): Promise<Record | null>,
  update(email: string, obj: T): Promise<null>,
  delete(email: string): Promise<null>,
}