import { CustomError } from "./CustomError.ts";

export class BadRequestError extends CustomError {
  status = 400;

  constructor(public msg: string) {
    super(msg);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.msg }];
  }
}
