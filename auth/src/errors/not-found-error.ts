import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  status = 404;

  constructor() {
    super("");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Not Found" }];
  }
}
