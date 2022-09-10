// Interface for ApiManager Class
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IApiManager {
  fetchData(): Promise<Todo[]>;
}

export interface Client {
  makeCall(): Promise<Todo[]>;
}