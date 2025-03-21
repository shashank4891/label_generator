import { IsString, IsNumber } from "class-validator";

export class LabelDto {
  @IsString()
  awb: string;

  @IsString()
  forwarding_number: string;

  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsNumber()
  total_num_of_box: number;
}
