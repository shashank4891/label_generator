import { Module } from '@nestjs/common';
import { PrinterController } from './printer.controller';
import { PrinterService } from './printer.service';
import { PdfGeneratorModule } from 'src/utils/pdf-generator/pdf-generator.module';

@Module({
  imports: [PdfGeneratorModule],
  controllers: [PrinterController],
  providers: [PrinterService]
})
export class PrinterModule {}
