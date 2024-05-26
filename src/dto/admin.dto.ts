import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
