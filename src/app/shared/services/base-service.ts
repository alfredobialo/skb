import {environment} from "../../../environments/environment";

export abstract class BaseService {

  get baseUrl(){
    return environment.baseUrl;
  }
}
