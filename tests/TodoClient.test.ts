// Unit test for the client that mocks the http call
import { TodoClient } from "../src/TodoClient";
import { mockData } from "../src/__mocks__/mockData";

jest.mock('../src/TodoClient');
const spy = jest.spyOn(TodoClient.prototype, "makeCall").mockResolvedValue(mockData)

describe('testing the TodoClient', () => {
  it('Testing if the function is being called and if the correct data is being returned', async () => {
    const todoClient = new TodoClient();
    
    await todoClient.makeCall().then(data => {

      expect(data).toEqual(mockData);
    });

    expect(spy).toHaveBeenCalled();
  });
});