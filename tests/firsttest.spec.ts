import test from '@playwright/test'

test.beforeEach('Before all Test Suits',async ({page}) => {
  await page.goto('http://localhost:4200/')
})
test.describe('First test suit Suit1', () => {
  test.beforeEach('before each test from Suit1', async({page})=>{
    await page.getByText('Forms').click()
  })

  test.skip ('the first test of Suit1', async({page}) => {
    await page.getByText('Form Layout').click()
  })

  test.skip ('the second test of Suit1', async({page}) => {
    await page.getByText('Datepicker').click()
  })

})

test.describe('Second test suit Suit2', () => {
  test.beforeEach('before each test from Suit2', async({page})=>{
    await page.getByText("Charts").click()
  })

  test.skip ('the first test of Suit2', async({page}) => {
    await page.getByText('Form Layout').click()
  })

  test.skip ('the second test of Suit2', async({page}) => {
    await page.getByText('Datepicker').click()
  })

})
