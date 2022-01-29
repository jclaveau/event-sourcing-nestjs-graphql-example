import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // app.enableCors();
    await app.init();
  });

  it('/ (GET)', (done) => {

    const server = app.getHttpServer();
    const router = server._events.request._router;

    const availableRoutes: [] = router.stack
      .map(layer => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter(item => item !== undefined);
    console.log(availableRoutes);


    // const req = request.default(server)
    const req = request.default(server)
    // console.log(req);
    req
      .get('/')
      .expect(200)
      .expect('Made with <3 by Arker Labs')
      .end(done);
  });
});
