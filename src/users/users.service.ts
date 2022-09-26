import { HttpException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<UserEntity>,
) {}

  async create(createUserDto: CreateUserDto) {
    const hasUser = await this.repository.findOne({
      where: { email: createUserDto.email },
    });

    if (!hasUser) {
      const password = await bcrypt.hash(createUserDto.password, 10);
      const data = {
        name: createUserDto.name,
        email: createUserDto.email,
        password: password,
        admin: createUserDto.admin,
      };
      return await this.repository.save(data);
    }
    return {
      codStatus: 201,
      msgStatus: "Email já cadastrado, por favor use outro email.",
    }
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(email: string): Promise<UserEntity> {
    const user = await this.repository.findOne({where: {email}});

    if (!user) {
      throw new NotFoundException();
    }
    return user;

  }

  // Falta desenvolver
  async changePassword(id: string, updateUserDto: UpdateUserDto) {

  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repository.update(id, updateUserDto);

    if (!user) {
      throw new NotFoundException();
    }
    return {
      id: id,
      codStatus: 201,
      msgStatus: "Usuário atualizado com sucesso",

    };
  }

  remove(id: string) {
    this.repository.delete(id)
    return{
      id: id,
      codStatus: 201,
      msgStatus: "Usuário deletado com sucesso",

    };
  }
}
