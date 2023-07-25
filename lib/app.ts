import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getTemplate } from'./pdf/html';
import { PDF } from "./pdf";

export const lambdaHandler = async (event: lambda.APIGatewayProxyEvent): Promise<lambda.APIGatewayProxyResult> => {   
    const { id, name } = event.body;

    const pdfHtml = getTemplate({ name: name });
    const response = await PDF.create(pdfHtml, id);

    try {
        return {
            headers: {
                'Content-type': 'application/json',
            },
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (err) {
        return {
            headers: {
                'Content-type': 'application/json',
            },
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
};