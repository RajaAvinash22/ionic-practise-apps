import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  LOGIN_URL = 'https://accedo-video-app-api.herokuapp.com/users';
  REGISTER_URL = 'https://accedo-video-app-api.herokuapp.com/signup';

  constructor() { }
}
