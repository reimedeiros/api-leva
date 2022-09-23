import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModuleTest } from '../../database/database_test.module';
import { UsersController } from '../users.controller';
import { userProviders } from '../users.providers';
import { UsersService } from '../users.service';
import * as request from 'supertest';
import { CreateUserDto } from '../dto/create-user.dto';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;

const user: CreateUserDto = {
  name: "name",
  email: "test@test.com",
  password: "123",
  admin: true
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ...userProviders],
      imports: [DatabaseModuleTest]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("(POST) should create users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(user)
      .then((response) => {
        console.log(response);
        // expect(response.statusCode).toBe(201);
        // expect(response.body.name).toBe("name");
      });
  });
  
  afterAll(done => {
    done()
  })

});
