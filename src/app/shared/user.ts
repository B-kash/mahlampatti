import {Base} from './base';

export class User extends Base {
  email: String;
  firstName: String;
  lastName: String;
  userName: String;
  password: String;
  role: String;

  constructor() {
    super();

  }
}
