import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {
  res.json({pong: true});
}
export const add = async (req: Request, res: Response) => {
  res.json({pong: true});
}
export const update = async (req: Request, res: Response) => {
  res.json({pong: true});
}
export const remove = async (req: Request, res: Response) => {
  res.json({pong: true});
}