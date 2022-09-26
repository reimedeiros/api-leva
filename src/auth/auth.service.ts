import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(user: any) {
    const payload = { email: user.email, id: user.id, name: user.name, admin: user.admin };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async validateUser(data): Promise<any> {
    const username = await this.usersService.findOne(data.email);
    const password = data.pass;

    const isMatch = await bcrypt.compare(password, username.password);

    if (isMatch === true) {
      const {password, ...result} = username;
      return result;
    }
      return null;

  }
}
