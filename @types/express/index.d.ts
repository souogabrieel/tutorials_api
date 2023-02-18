import { PaginateFunction } from "prisma-pagination";

export {};

declare global {
  namespace Express {
    export interface Request {
      paginate: PaginateFunction;
    }
  }
}
