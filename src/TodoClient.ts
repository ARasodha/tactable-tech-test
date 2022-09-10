import axios from 'axios';
import { injectable } from "inversify";
import "reflect-metadata";
import { Client, Todo } from './interface'

@injectable()
export class TodoClient implements Client {
  async makeCall(): Promise<Todo[]> {
    const { data } = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  }
}