import nodemailer from "nodemailer";

const services = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webpsrm@gmail.com',
      pass: 'd3lVMDE2SFBPSkhjTEZZcEFKbnNaUT09'
    }
  });

export const send: any = async (envelope: any) => {
  
  return new Promise((resolve, reject)=>{
    var mailOptions = {
        from: 'webpsrm@gmail.com',
        to: 'cadalzolc@gmail.com',
        subject: 'PDF Generator',
        text: 'Test PDF from LAMBDA',
        attachments: envelope.attachments
    };

    services.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        resolve(false);
      } 
      else {
        resolve(true);
      }
    });

  });

};