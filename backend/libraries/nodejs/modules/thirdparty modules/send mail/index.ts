let nodemailer=require('nodemailer')
let transporter=nodemailer.createTransport({
    // Service: 'gmail',
    // auth:{
    //     user:'raghum.stpl@gmail.com',
    //     pass: '',
    host: 'gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'raghu.m@softpro9.com',
        pass: 'Sushma@77899'
    }
})

var mailoption={
    from: 'raghu.m@softpro9',
    to: 'raj.softpro9@gmail.com',
    subject: 'Welcome to SoftPro9',
    text: 'Its my 1st Email from NodeMailer'
}

transporter.sendMail(mailoption,(err:any,res:any)=>{
if(err) throw err
console.log('mail sent')
})