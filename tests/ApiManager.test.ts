// Integration test which validates client is injected properly
import { TodoClient } from "../src/TodoClient";
import { ApiManager } from "../src/ApiManager";
import { mockData } from "../src/__mocks__/mockData";

jest.mock('../src/TodoClient');
const spy = jest.spyOn(ApiManager.prototype, "fetchData").mockResolvedValue(mockData);

describe('integration test', () => {
  it('validating the client being injected properly', () => {
    const todoClient = new TodoClient();
    const apiManager = new ApiManager(todoClient);

    apiManager.fetchData().then((data) => {
      
      expect(data).toEqual(mockData);
    });

    expect(spy).toHaveBeenCalled();
  });
});