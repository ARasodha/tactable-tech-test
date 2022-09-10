// import { TodoClient } from "./interface";
import { TodoClient } from './TodoClient';
import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { IApiManager, Todo } from './interface'

@injectable()
export class ApiManager implements IApiManager {
  private todoClient: TodoClient;  

  constructor(@inject("TodoClient") todoClient:TodoClient) {
    this.todoClient = todoClient;
  }

  async fetchData(): Promise<Todo[]> {
    const response = await this.todoClient.makeCall();
    return response;
  }
}