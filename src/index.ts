// File to test application during development before jest implementation
import { ApiManager } from './ApiManager';
import { container } from './inversify.config';

const apiManager = container.get<ApiManager>("ApiManager");
apiManager.fetchData().then((data) => console.log(data));
