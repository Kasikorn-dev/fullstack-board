import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [{ id: 1, username: 'testuser' }];
  }

  @Post()
  createUser(@Body() body: any) {
    return { message: 'User created', data: body };
  }
}
