import * as request from 'supertest';
import * as app from '../src/app';
import { default as UserService } from '../src/services/user.srvc';
import { User } from '../src/models/user';

let user: User;
const userForm = {
  name: 'John'
};

describe('POST /users', () => {
  const route: string = '/users';

  it('should return 200', (done) => {
    request(app).post(route)
      .send(userForm)
      .then(res => {
        user = res.body;
        expect(res.status).toEqual(200);
        done();
      });
  });
});

describe('GET /users', () => {
  const route: string = '/users';

  it('should return 200', (done) => {
    request(app).get(route)
      .expect(200, done);
  });
});

