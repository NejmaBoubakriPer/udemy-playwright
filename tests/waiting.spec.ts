import test, { expect } from '@playwright/test'
test.beforeEach('Before all Test Suits',async ({page},testInfo) => {
  await page.goto('http://uitestingplayground.com/ajax')
  await page.getByText('Button Triggering AJAX Request').click()

  //adding 6s to each test
  testInfo.setTimeout(testInfo.timeout + 6000)
})

test ('Auto Waiting',async({page})=> {

  const successButton = page.locator('.bg-success')
  //await successButton.click()
  /// if we reduce the timout the test will fail, because the button needs 15s to show up

  //const textSuccess = await successButton.textContent()

  /// textContent() has auto wait , but not allTextContents() , so we implement a wait
  //await successButton.waitFor({state: 'attached'})
  //const textSuccess = await successButton.allTextContents()

  //expect(textSuccess).toContain('Data loaded with AJAX get request.')

  //assertions has timout of 5s , without introducing new timeout , the test will fail
  await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('alternative Waits', async({page})=>{
    const successButton = page.locator('.bg-success')

    // a wait for elements
    //await page.waitForSelector('.bg-success')

    // wait for particular resp
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be complited(not recommended)
    await page.waitForLoadState('networkidle')

    const textSuccess = await successButton.allTextContents()
    expect(textSuccess).toContain('Data loaded with AJAX get request.')


})

test('Timeout', async({page})=>{
    //test.setTimeout(10000)
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click({timeout:60000})


})
