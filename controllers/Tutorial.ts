import { NextFunction, Request, Response } from "express";

import prisma from "../prisma";

async function getTutorials(req: Request, res: Response, next: NextFunction) {
  try {
    const tutorials = await prisma.tutorial.findMany();
    return res.json(tutorials);
  } catch (err: any) {
    next(err);
  }
}

async function getTutorial(req: Request, res: Response, next: NextFunction) {
  try {
    const tutorial = await prisma.tutorial.findFirstOrThrow({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(tutorial);
  } catch (err: any) {
    next(err);
  }
}

async function createTutorial(req: Request, res: Response, next: NextFunction) {
  try {
    const tutorial = await prisma.tutorial.create({ data: { ...req.body } });
    return res.json(tutorial);
  } catch (err) {
    next(err);
  }
}

async function updateTutorial(req: Request, res: Response, next: NextFunction) {
  try {
    const tutorial = await prisma.tutorial.update({
      where: { id: parseInt(req.params.id) },
      data: { ...req.body },
    });
    return res.json(tutorial);
  } catch (err: any) {
    next(err);
  }
}

async function deleteTutorial(req: Request, res: Response, next: NextFunction) {
  try {
    await prisma.tutorial.delete({ where: { id: parseInt(req.params.id) } });
    return res.json({ message: "Tutorial deleted successfully" });
  } catch (err: any) {
    next(err);
  }
}

export default {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
};
