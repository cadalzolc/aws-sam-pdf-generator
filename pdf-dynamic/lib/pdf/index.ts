import { Pdf, PageSize, Orientation } from "@dynamicpdf/api";

export async function create(html: string) { 

    const apiKey = "DP.KYE0I2pwSdal6MIeGu4qafUB4kZa0G5XwjCx2CGRReTpSLeyhroAo4hY";
    
    var pdf = new Pdf();

    pdf.apiKey = apiKey;

    pdf.addHtml(html, null, PageSize.LETTER, Orientation.PORTRAIT, 1);

    return await pdf.process();
}