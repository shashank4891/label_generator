import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';

@Injectable()
export class PdfGeneratorService implements OnModuleInit, OnModuleDestroy {
  private browser: Browser;

  async onModuleInit() {
    await this.initBrowser();
  }

  async onModuleDestroy() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  private async initBrowser() {
    try {
      this.browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

    } catch (error) {
      throw new Error("Puppeteer failed to initialize");
    }
  }

  async labelLaunchPuppeteer(htmlFile: any): Promise<any> {

    if (!this.browser) {
      await this.initBrowser();
    }

    const page = await this.browser.newPage(); 

    await page.setContent(htmlFile, {
      waitUntil: ["networkidle2", "domcontentloaded"],
    });

    const pdfBuffer = await page.pdf({
      width: "4in",
      height: "2.5in",
      printBackground: true,
    });
    await page.close(); 

    return pdfBuffer;
  }
}
