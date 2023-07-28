import * as puppeteer from 'puppeteer';

export type GeneratorFunction = (html: string) => any;

export class PDF {
    static create: GeneratorFunction = async (html: string) => {
        try {
            const browser = await puppeteer.launch({
                headless: "new"
            });
    
            const page = await browser.newPage();
    
            await page.setContent(html, {
                waitUntil: 'domcontentloaded'
            });
    
            const pdfBuffer = await page.pdf({
                format: 'A4'
            });
    
            await browser.close();
    
            return {
                success: true,
                content: pdfBuffer
            };
        } catch(err) {
            
            console.log(err);

            return {
                success: false,
                content: err
            };
        }
    }
}