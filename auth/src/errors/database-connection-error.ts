import { CustomError } from "./CustomError";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to the database";
  status = 500;

  constructor() {
    super("Error connecting to the database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
