import * as AWS  from "aws-sdk";

export const upload: any = (data: any, id: string) => {
    
    var s3 = new AWS.S3();
    let msg: any = null;
    let success = false;
    const code  = Math.ceil(Math.random() * 10000000000);
    const pdfName = `pdf-${code}-${id}.pdf`;
    const s3Params = {
        Bucket: "dev-storagestack-imagebucket97210811-ya8t7sbi1ypr",
        Key: `/protected/acceptances/${pdfName}`,
        Body: data,
        ContentType: "application/pdf",
        ACL: 'public-read',
    };

    s3.putObject(s3Params, function (err: any) {
        if (err) {
            msg = err;
        } else {
            success = true;
            msg = {
                url: `https://${s3Params.Bucket}.s3.eu-west-1.amazonaws.com${s3Params.Key}`
            };
        }
    });

    return {
        success: success,
        message: msg
    }
};