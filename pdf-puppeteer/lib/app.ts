import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getTemplate } from'./pdf/html';
//import { PDF } from "./pdf";
import * as puppeteer from 'puppeteer';

export const pdfGenerator = async (event: lambda.APIGatewayProxyEvent): Promise<lambda.APIGatewayProxyResult> => {   
    const { id, name } = event.body;
    const pdfHtml = getTemplate({ name: name });
    //const res = await PDF.create(pdfHtml);

    try {
        const browser = await puppeteer.launch({
            headless: "new"
        });

        const page = await browser.newPage();

        await page.setContent(pdfHtml, {
            waitUntil: 'domcontentloaded'
        });

        const pdfBuffer = await page.pdf({
            format: 'A4'
        });

        await browser.close();

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: pdfBuffer,
            }),
        }
    } catch(err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                data: err,
            }),
        }
    }

   

    // if (res.success === true) {
    //     return {
    //         statusCode: 200,
    //         headers: {
    //           'Content-Type': 'application/pdf',
    //           'Content-disposition': 'attachment; filename=fileName.pdf',
    //         },
    //         body: Buffer.from(res.content),
    //         isBase64Encoded: true,
    //       };
    // }

    // return {
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     statusCode: 500,
    //     body: JSON.stringify({
    //         message: res.content,
    //     }),
    // };
};