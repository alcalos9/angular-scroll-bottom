import { Injectable } from '@angular/core';

export interface ITodo {
  id: number;
  description: string;
}

const TODOS: ITodo[] = [
  {
    id: 1,
    description: 'foo',
  },
  {
    id: 2,
    description: 'bar',
  },
  {
    id: 3,
    description: 'baz',
  },
  {
    id: 4,
    description: 'quux',
  },
  {
    id: 5,
    description: 'zip',
  },
  {
    id: 6,
    description: 'plop',
  },
  {
    id: 7,
    description: 'toto',
  },
  {
    id: 8,
    description: 'tata',
  },
  {
    id: 9,
    description: 'tutu',
  },
  {
    id: 10,
    description: 'titi',
  },
];

@Injectable()
export class TodoService {
  getTodos() {
    return Promise.resolve([...TODOS]);
  }
}