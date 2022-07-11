import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {
  const list = await Todo.findAll();

  res.status(200).json({ list });
}
export const add = async (req: Request, res: Response) => {
  const { title } = req.body;

  if(title) {
    const newTodo = await Todo.create({ 
      title,
      done: req.body.done ? true : false
    });

    res.status(201).json({ item: newTodo });
  } else {
    res.status(500).json({ error: 'Server error' });
  }
}
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await Todo.findByPk(id);

  if(todo) {
    if(req.body.title) {
      todo.title = req.body.title;
    }

    if(req.body.done) {
      switch(req.body.done.toLowerCase()) {
        case 'true':
        case '1':
          todo.done = true;
          break;
        case 'false':
        case '0':
          todo.done = false;
          break;
      }
    }

    await todo.save();
    res.status(201).json({ item: todo });

  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await Todo.findByPk(id);

  if(todo) {
    await todo.destroy();
    res.status(201).json({});
  } else {
    res.status(404).json({ error: 'Not Found'});
  }

}