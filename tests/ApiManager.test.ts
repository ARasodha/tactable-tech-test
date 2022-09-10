// Integration test which validates client is injected properly
import { TodoClient } from "../src/TodoClient";
import { ApiManager } from "../src/ApiManager";
import { mockData } from "../src/__mocks__/mockData";

jest.mock('../src/TodoClient');

describe('integration test', () => {
  it('validating the client being injected properly', () => {
    const todoClient = new TodoClient();
    const apiManager = new ApiManager(todoClient);

    apiManager.fetchData().then((res) => {
      
      expect(res.data).toEqual(mockData);
    });
  });
});