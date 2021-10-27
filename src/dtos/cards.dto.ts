import { IsEmail, IsNumber, IsString } from "class-validator";


export class CreateCardDto {
  @IsString()
  public name: string;
  public img: Buffer;
  @IsNumber()
  public weight: number;
}
