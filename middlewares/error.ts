import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Prisma } from "@prisma/client";
import { ValidationError } from "joi";

function errorHandling(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let code;

  if (
    err instanceof Prisma.PrismaClientKnownRequestError ||
    err instanceof Prisma.PrismaClientUnknownRequestError ||
    err instanceof Prisma.PrismaClientValidationError ||
    err instanceof ValidationError
  ) {
    code = StatusCodes.BAD_REQUEST;
  } else {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
  }

  return res.status(code).json({ message: err.message });
}

export default errorHandling;
