// import { TodoClient } from "./interface";
import { TodoClient } from './TodoClient';
import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { Manager } from './interface'

@injectable()
export class ApiManager implements Manager {
  private todoClient: TodoClient;  

  constructor(@inject("TodoClient") todoClient:TodoClient) {
    this.todoClient = todoClient;
  }

  async fetchData() {
    const response = await this.todoClient.makeCall();
    return response;
  }
}