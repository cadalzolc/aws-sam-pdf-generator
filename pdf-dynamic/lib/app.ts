import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getTemplate } from'./html';
import * as PDF from "./pdf";


export const pdfCreate = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
    let msg: any = null;
    let data: any = null;

    try {

        const pdfHtml = getTemplate({ name: "mozym" });
        const pdf = await PDF.create(pdfHtml);

        if (pdf.isSuccessful) {
            msg = "success";

            return {
                statusCode: 200,
                headers: {
                  'Content-Type': 'application/pdf',
                  'Content-disposition': 'attachment; filename=vsurgic.pdf',
                },
                body: pdf.content.toString('base64'),
                isBase64Encoded: true,
              };
        }

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "error",
            }),
        };

    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
};