// Mock version of TodoClient to avoid API calls during development
import { mockData } from "./mockData";

export class TodoClient {
  async makeCall() {
    return new Promise((resolve) => resolve(mockData));
  }
}