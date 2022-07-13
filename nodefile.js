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
    cc: 'shubhamgarg1671@gmail.com',
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
  console.log(res);
  JSON.stringify(res)
})
.then((result) =>{
  var fs = require('fs');
  fs.writeFile('myResult.json', result, 'utf8', (e)=>{
    console.log(e);
  });
  // sendemail(result);
});