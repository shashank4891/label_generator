import { Injectable } from '@nestjs/common';
import { PdfGeneratorService } from 'src/utils/pdf-generator/pdf-generator.service';
import { awbPublicLabelTemplate } from './templates/label-templates';

@Injectable()
export class PrinterService {
    constructor(private readonly pdfGenerationService: PdfGeneratorService){}

    async labelPrint(payload: any): Promise<Buffer>{
        const htmlContent = awbPublicLabelTemplate(payload);
        return this.pdfGenerationService.labelLaunchPuppeteer(htmlContent);
    }
}
