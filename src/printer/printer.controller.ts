import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from "express";
import { PrinterService } from './printer.service';
import { LabelDto } from './dto/lable.dto';

@Controller('printer')
export class PrinterController {
    constructor(private readonly printerService: PrinterService){}

    @Post("label")
    async generatePdf(@Res() res: Response, @Body() payload: LabelDto) {
        try {

          const pdfBuffer = await this.printerService.labelPrint(payload);
    
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=label.pdf");
          res.end(pdfBuffer);
          // return res;
        } catch (error) {
          console.error("Error in PDF Generation:", error);
          res.status(500).json({ message: "Error generating PDF", error });
        }
      }
}
