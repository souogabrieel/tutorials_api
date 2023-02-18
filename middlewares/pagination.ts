import { NextFunction, Request, Response } from "express";
import { createPaginator } from "prisma-pagination";

function pagination(req: Request, res: Response, next: NextFunction) {
  req.paginate = createPaginator({
    page: req.query.page?.toString() || 0,
    perPage: 10,
  });

  next();
}

export default pagination;
