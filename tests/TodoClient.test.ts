// Unit test for the client that mocks the http call
import { TodoClient } from "../src/TodoClient";
import { mockData } from "../src/__mocks__/mockData";

jest.mock('../src/TodoClient');

describe('testing the TodoClient', () => {
  it('Should make http get request for all todos', async () => {
    const todoClient = new TodoClient();
    
    await todoClient.makeCall().then(res => {

      expect(res.data).toEqual(mockData);
    });
  });
});