export interface IAuthorizedUserContext{
  firstName: string;
  lastName: string;
  id: string;
  role: string;
  permissions: string[];
}

export interface IAuthenticatedUser{
  currentUser ?: IAuthorizedUserContext | null;
  isAuthenticated : boolean
}

export interface IUserLoginRequest{
  userId: string;
  password: string;
}
