import {Injectable} from '@angular/core';
import {IUserLoginRequest} from "../models/IAuthorizedUserContext";
import {BaseService} from "./base-service";

@Injectable({providedIn :"root"})
export class AuthenticationService extends BaseService {

  constructor() {
    super();
  }

  requestLogin(loginReq : IUserLoginRequest){

  }
}
