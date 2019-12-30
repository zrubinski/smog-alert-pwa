import { environment } from 'src/environments/environment';

export abstract class ApiService {
    protected url = (path: string): string => {
        return environment.apiUrl + path;
    }
}
