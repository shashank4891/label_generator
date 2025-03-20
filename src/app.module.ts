import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrinterModule } from './printer/printer.module';
import { PdfGeneratorModule } from './utils/pdf-generator/pdf-generator.module';

@Module({
  imports: [PrinterModule, PdfGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
