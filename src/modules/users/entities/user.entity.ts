import * as moment from 'moment';

export class User {
  id: number;
  username: string;
  lastname: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
    this.id = partial.id || undefined; // if id is not provided, create a new one
    const date = moment().utc().format(); // get the current date
    this.createdAt = this.createdAt || date; // if createdAt is not provided, create a new one
    this.updatedAt = date; // always update the updatedAt field
  }
}
