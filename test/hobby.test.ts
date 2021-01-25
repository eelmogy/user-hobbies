import * as request from 'supertest';
import * as app from '../src/app';
import { default as UserService } from '../src/services/user.srvc';
import { Hobby } from '../src/models/hobby';
import { User } from '../src/models/user';

let user: Hobby;
const hobbyForm = {
  name: 'Playing football',
  passionLevel:'very-high',
  year:2014,
  userId:'5e373b4d2ecce62beff17955'
};

describe('POST /hobbies', () => {
  const route: string = '/hobbies';

  it('should return 200', (done) => {
    request(app).post(route)
      .send(hobbyForm)
      .then(res => {
        user = res.body;
        expect(res.status).toEqual(200);
        done();
      });
  });
});


describe('GET /hobbies', () => {
  const route: string = '/hobbies';

  it('should return 200', (done) => {
    request(app).get(route)
      .expect(200, done);
  });
});
