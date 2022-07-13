// e2e-run-tests.js
const cypress = require('cypress')
const nodemailer = require('nodemailer');
var jsonfile = require('jsonfile');

const sendemail = (res) =>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shubhamgargshubhamgargshubham@gmail.com',
      pass: 'ifnqlhtpdxuzllgu'
    }
  });
  var mailOptions = {
    from: 'shubhamgargshubhamgargshubham@gmail.com',
    to: 'shubham.garg@carpl.ai',
    subject: 'Test Results',
    text: `${res}`
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(404).send(error);
    } else {
      console.log(`Email sent: ${info.response}`)
      res.status(200).send(`Email sent: ${info.response}`);
    }
  });

}


cypress.run({
  browser: 'chrome',
  config: {
    baseUrl: 'http://localhost:3000',
    video: false,
  },
}).then((res)=> {
  if (res["totalFailed"] !== 0) {  
    jsonfile.writeFile('loop.json', res, {spaces:2}, function(err){
      console.log(err);
    });
    console.log(`number of tests failed ${res["totalFailed"]}`);
    // sendemail(`number of tests failed ${res["totalFailed"]}`);
  }
});