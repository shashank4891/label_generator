import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';
import { CHROME_EXECUTABLE_PATH_SERVER } from 'src/constants';

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

      console.log("🟢 Using Chrome Executable Path:", CHROME_EXECUTABLE_PATH_SERVER);

      this.browser = await puppeteer.launch({
        executablePath: CHROME_EXECUTABLE_PATH_SERVER,
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-accelerated-2d-canvas",
          "--disable-features=AudioServiceOutOfProcess",
          "--single-process",
          "--no-zygote",
        ],
      });
      console.log("✅ Puppeteer Initialized Successfully");
    } catch (error) {
      console.error("❌ Puppeteer Launch Error:", error);
      throw new Error(`Puppeteer failed to initialize: ${error.message}`);
    }
  }

  async labelLaunchPuppeteer(htmlFile: any): Promise<any> {
    if (!this.browser) {
      await this.initBrowser();
    }

    const page = await this.browser.newPage();

    await page.setContent(htmlFile, {
      waitUntil: ['networkidle2', 'domcontentloaded'],
    });

    const pdfBuffer = await page.pdf({
      width: '4in',
      height: '2.5in',
      printBackground: true,
    });
    await page.close();

    return pdfBuffer;
  }
}
