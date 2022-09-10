import { Container } from "inversify";
import { TodoClient } from "./TodoClient";
import { ApiManager } from "./ApiManager";
const container = new Container();

// Binding TodoClient & ApiManager to inversify container
container.bind<TodoClient>("TodoClient").to(TodoClient);
container.bind<ApiManager>("ApiManager").to(ApiManager);

export { container };