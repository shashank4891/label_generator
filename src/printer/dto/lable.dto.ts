import { IsString, IsNumber, Min, MaxLength } from "class-validator";

export class LabelDto {
  @IsString()
  awb: string;

  @IsString()
  forwarding_number: string;

  @IsString()
  vendor_name: string;

  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsNumber()
  total_num_of_box: number;
}
