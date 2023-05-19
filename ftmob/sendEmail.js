const AWS = require('aws-sdk');


module.exports.sendEmail = (to,sub,msg)=>{

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1' // Replace with your desired AWS region
});

const ses = new AWS.SES();

const params = {
  Destination: {
    ToAddresses: [to] // Replace with the recipient's email address
  },
  Message: {
    Body: {
      Html: {
        Data: getMsg(msg) // Replace with your desired HTML content
      }
    },
    Subject: {
      Data: sub // Replace with your desired email subject
    }
  },
  Source: 'support@fundmefx.com' // Replace with the sender's email address
};

ses.sendEmail(params, (err, data) => {
  if (err) {
    console.error('Error sending email:', err);
  } else {
    console.log('Email sent successfully:', data);
  }
});

}

function getMsg(msg){
  return `<!DOCTYPE html>
  <html lang="en" style="box-sizing: border-box;margin:0">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FundMeFX</title>
  </head>
  <body style="box-sizing: border-box;margin:0">
      <div style="width:100%;padding:50px;background: #eceff1; box-sizing: border-box;padding-top:20px">
          <p style="display:flex;justify-content: center;align-items: center;gap: 5px;">
              <img src="https://fundmefx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0d0525cf.png&w=32&q=75" alt="logo">
              <span style="font-weight: bold;font-size: 23px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">FMFX</span>
          </p>
          <div style="background-color: white;padding: 20px; border-radius: 4px; width: 100%;">
             <p>${msg}</p>
          </div>
            
      </div>
  </body>
  </html>`
}