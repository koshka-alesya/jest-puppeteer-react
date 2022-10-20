console.log('hello')
module.exports = {
  launch: {
    dumpio: true,
    headless: true, //process.env.HEADLESS !== 'false',
    // mac os 
    // executablePath: '/opt/homebrew/bin/chromium',
    // ignoreDefaultArgs: ['--disable-extensions'], 
    // args: ['--no-sandbox', "--disabled-setupid-sandbox", '--disable-gpu']
  },
  // comment if mac os
  browser: 'chromium',
  browserContext: 'default',
  // browser: 'chromium',
  // browserContext: 'default',
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}