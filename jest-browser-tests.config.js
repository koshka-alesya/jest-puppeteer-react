module.exports = {
  preset: 'jest-puppeteer',
  // setupFilesAfterEnv: ["expect-puppeteer"], 
  rootDir: 'integration',
  testRegex: './*\\.browser-test\\.(js|tsx?)$',
}