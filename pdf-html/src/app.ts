import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as PDF from './pdf';
import { error } from 'console';

export const pdfGenerator = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        const pdf = await PDF.create().then(res => {
            return {
                success: true,
                data: res
            }
        }).catch(err => {
            return {
                success: false,
                data: err
            }
        });

        if (!pdf) {
            throw error;
        }

        return {
            statusCode: 500,
            body: JSON.stringify({
                data: pdf,
            }),
        };
        
        // return {
        //     statusCode: '200',
        //     headers: {
        //       'Content-Type': 'application/pdf',
        //       'Content-disposition': 'attachment; filename=fileName.pdf',
        //     },
        //     body: pdf.toString('base64'),
        //     isBase64Encoded: true,
        // };
        
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
