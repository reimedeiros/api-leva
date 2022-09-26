import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModuleTest } from '../../database/database_test.module';
import { UsersController } from '../users.controller';
import { userProviders } from '../users.providers';
import { UsersService } from '../users.service';
import * as request from 'supertest';
import { CreateUserDto } from '../dto/create-user.dto';
import { INestApplication } from '@nestjs/common';

const user: CreateUserDto = {
  name: "name",
  email: "test@test.com",
  password: "123",
  admin: true
};

describe('UsersController', () => {
  let app: INestApplication;
  let controller: UsersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ...userProviders],
      imports: [DatabaseModuleTest]
    }).compile();

    controller = module.get<UsersController>(UsersController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("(GET) show all users", () => {
    return request(app.getHttpServer())
      .get("/users")
      .then((response) => {
        console.log("GET = ", response);
      })
  });

  // it("(POST) should create users", async () => {
  //   await request(app.getHttpServer())
  //     .post("/users")
  //     .send({
  //       "name": "Ray B. Medeiros",
  //       "email": "raylan@gmail.com",
  //       "password": "123",
  //       "admin": true
  //   })
  //     .then((response) => {
  //       expect(response.statusCode).toBe(201);
  //       expect(response.body.name).toBe("name");
  //     });
  // });

});
