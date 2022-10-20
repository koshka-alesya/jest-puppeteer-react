// for local tests
// const puppeteer = require('puppeteer');


describe('App', () => {
  // for local tests
  // let browser
  // let page


  beforeAll(async () => {
    // for local tests
    // browser = await puppeteer.launch({
    //   headless: false
    // });
    // page = await browser.newPage();

    await page.goto('http://localhost:3000')
  
  })

  it('should display a react logo', async () => {
    await expect(page).toMatch('React')
    return true
  })

  it('should match a button with a "Learn React" text inside', async () => {
    await expect(page).toMatchElement('.App-link', { text: 'Learn React' })
    return true
  })

  afterAll(async () => {
    await page.close();
    await browser.close();
    return true;
  });
})
