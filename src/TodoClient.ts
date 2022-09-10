const axios = require('axios');
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class TodoClient {
  async makeCall() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response;
  }
}