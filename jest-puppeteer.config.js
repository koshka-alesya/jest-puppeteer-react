console.log('hello')
module.exports = {
  launch: {
    dumpio: true,
    headless: true, //process.env.HEADLESS !== 'false',
    ignoreDefaultArgs: ['--disable-extensions'], 
    args: ['--no-sandbox', "--disabled-setupid-sandbox", '--disable-gpu']
  },

  browser: 'chromium',
  browserContext: 'default',
  
  // Comment server for local testing
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 60000,
    debug: true,
  },
}