import * as Handlebars from 'handlebars';
import * as pdf from 'html-pdf';

export async function create() {
    return new Promise<string>(async (resolve, reject) => {

        const htmlString: string = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
            </head>
            <body>
                <h1>PDF Generation Test</h1>
                <div>
                Hi, My Name is {{name}}, This data from body :)
                </div>
            </html>
        `;
        var html = Handlebars.compile(htmlString)({ name: "mozym"});

        let pdfPromise = await pdf.create(html, {
            format: "A3",
            orientation: "portrait",
            border: "10mm"
        });

        pdfPromise.toBuffer((err: any, buff: any | PromiseLike<any>) => {
            if (!err)
                resolve(buff);
            else
                reject(err);
        });

    });
}