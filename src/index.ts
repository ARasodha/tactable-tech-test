// File to test application before jest implementation
import { ApiManager } from './ApiManager';
import { container } from './inversify.config'

const apiManager = container.get<ApiManager>("ApiManager");
apiManager.fetchData().then((res: any) => console.log(res.data))
