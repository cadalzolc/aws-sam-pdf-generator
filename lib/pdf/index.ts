import * as AWS  from "aws-sdk";
import * as puppeteer from "puppeteer-core";
import chromium from '@sparticuz/chromium';
import { PutObjectRequest } from "aws-sdk/clients/s3";

export type GeneratorFunction = (html: string, id: string) => any;

export class PDF {

    static create: GeneratorFunction = async (html: string, id: string) => {

        let browser = null;
        let pdf: Buffer | undefined = undefined;
        let hasError: boolean = false;
        let errMsg: any = {};
        
        try {

            browser = await puppeteer.launch({
                args: ["--no-sandbox"],
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
                ignoreHTTPSErrors: true,
            });

            console.log("create new page");
        
            let page = await browser.newPage();

            await page.setContent(html);

            console.log("create pdf");
            
            pdf = await page.pdf({
                format: 'a4',
                margin: {
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                },
            });

            await page.close();
            await browser.close();

        } catch (error) {
            errMsg = error;
            console.log(error, "pdf-error");
            hasError = true;
        } finally {
            if (browser !== null) {
                await browser.close();
            }
        }

        if (hasError == true) {
            return {
                success: false,
                message: errMsg,
                data: ""
            };
        }

        if (!pdf) {
            return {
                success: false,
                message: "PDF generation failed. nothing is generated.",
                data: ""
            };
        }

        hasError = false;

        const randomName = Math.ceil(Math.random() * 10000000000);
        const output_filename = `pdf-${id}-${randomName}.pdf`;
        const s3Params: PutObjectRequest = {
            Bucket: "dev-storagestack-imagebucket97210811-ya8t7sbi1ypr",
            Key: `/protected/acceptances/${output_filename}`,
            Body: pdf,
            ContentType: "application/pdf",
            ServerSideEncryption: 'AES256',
            ACL: 'public-read',
        };

        const s3 = new AWS.S3();
        
        let success = false;
        let url = "";
        let msg: any = {};

        s3.putObject(s3Params, function (err) {
            if (err) {
                msg = err
                console.log(err, "s3-error");
            } else {
                success = true;
                url = `https://${s3Params.Bucket}.s3.eu-west-1.amazonaws.com${s3Params.Key}`;
            }
        });

        return {
            success: hasError,
            message: msg,
            data: `https://${s3Params.Bucket}.s3.eu-west-1.amazonaws.com${s3Params.Key}`
        };
    }
}