import { randomUUID } from "crypto";

export abstract class BaseEntity {
  protected _id: string;

  private readonly _createdAt: Date;

  private _updatedAt: Date;

  constructor() {
    this._id = randomUUID();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

}
