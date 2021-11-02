const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   service : 'gmail',
   auth : {
       user : 'canchasgambeta@gmail.com',
       pass : ''
   } 
});

const mailOptions = {
    from: 'canchasgambeta@gmail.com',
    to: 'lorenzofran1@gmail.com',
    subject: 'Enviando emails con Node.js!',
    text: 'test test test'
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) console.log(error);
    else console.log('Email enviado: ' + info.response);
});