console.log("inside plugin/index.js");
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shubhamgargshubhamgargshubham@gmail.com',
      pass: 'ifnqlhtpdxuzllgu'
    }
  });



module.exports = (on, config) => {
    require('cypress-email-results')(on, config, {
      email: ['shubham.garg@carpl.ai'],
      transporter
    })
  }