import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(8)
  readonly password: string;
}
