import { Request, Response } from "express";

import prisma from "../prisma";

async function getTutorials(req: Request, res: Response) {
  const tutorials = await prisma.tutorial.findMany();
  return res.json(tutorials);
}

async function getTutorial(req: Request, res: Response) {
  const tutorial = await prisma.tutorial.findFirst({
    where: { id: parseInt(req.params.id) },
  });
  return res.json(tutorial);
}

async function createTutorial(req: Request, res: Response) {
  const tutorial = await prisma.tutorial.create({ data: { ...req.body } });
  return res.json(tutorial);
}

async function updateTutorial(req: Request, res: Response) {
  const tutorial = await prisma.tutorial.update({
    where: { id: parseInt(req.params.id) },
    data: { ...req.body },
  });
  return res.json(tutorial);
}

async function deleteTutorial(req: Request, res: Response) {
  await prisma.tutorial.delete({ where: { id: parseInt(req.params.id) } });
  return res.json({ message: "Tutorial deleted successfully" });
}

export default {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
};
