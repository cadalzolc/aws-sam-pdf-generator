import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getTemplate } from'./pdf/html';
import { PDF } from "./pdf";

export const pdfGenerator = async (event: lambda.APIGatewayProxyEvent): Promise<lambda.APIGatewayProxyResult> => {   
    const { id, name } = event.body;
    const pdfHtml = getTemplate({ name: name });
    const res = await PDF.create(pdfHtml);

    if (res.success === true) {
        return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/pdf',
              'Content-disposition': 'attachment; filename=fileName.pdf',
            },
            body: Buffer.from(res.content),
            isBase64Encoded: true,
          };
    }

    return {
        headers: {
            'Content-type': 'application/json',
        },
        statusCode: 500,
        body: JSON.stringify({
            message: res.content,
        }),
    };
};