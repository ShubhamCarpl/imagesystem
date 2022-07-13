// e2e-run-tests.js
const cypress = require('cypress')

const { merge } = require('mochawesome-merge')

// See Params section below
const options = {
  files: [
    './report/*.json',

    // you can specify more files or globs if necessary:
    './mochawesome-report/*.json',
  ],
}

cypress.run({
  browser: 'chrome',
  config: {
    baseUrl: 'http://localhost:3000',
    video: false,
  },
}).then(()=>{
    console.log("Done testing ");
    merge(options).then(report => {
    console.log(report)
})
      
});