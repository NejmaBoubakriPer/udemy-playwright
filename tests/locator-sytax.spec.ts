import test, { expect } from '@playwright/test'
test.beforeEach('Before all Test Suits',async ({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})


test ('Syntax Layout rules',async({page})=> {
// by tag name
  page.locator('input').first().click()
  // by id
  page.locator('#inputEmail')
  //class value
  page.locator('.shape-rectangle')
  //atribute
  page.locator('[placeholder="Email"]')
  // by the whole class value
  page.locator('[ class="input-full-width size-medium status-basic shape-rectangle nb-transition]')
  //combination
  page.locator('input[placeholder="Email"].shape-rectangle')
  //XPATH not recommanded
  page.locator('//*[@id="inputEmail"]')
  //by partial text match
  page.locator(':text("Using")')
  //by exact text
  page.locator(':text-is("Using the Grid")')
})


test('User facing locator',async({page})=>{
  await page.getByRole('textbox',{name: "Email"}).first().click()
  await page.getByRole('button',{name: "Sign in"}).first().click()

  await page.getByLabel('Email').first().click()

  await page.getByPlaceholder('Jane Doe').click()

  await page.getByAltText('Using the Grid')

  // You should have a test ID in your web page to use it
  // await page.getByTestId('SignIn').click()

  await page.getByTitle('IoT Dashboard').click()
})

test('Locating Child Elements',async({page})=>{
  await page.locator('nb-card nb-radio :text-is("Option 1")').click()
  await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

  await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()

  await page.locator('nb-card').nth(3).getByRole('button').click()
})

test('Locating Parent Element',async({page})=>{
  await page.locator('nb-card',{hasText:"Using the Grid"}).getByRole('textbox',{name:"Email"}).click()
  await page.locator('nb-card',{has: page.locator('#inputEmail1')}).getByRole('textbox',{name:"Email"}).click()

  await page.locator('nb-card').filter({hasText: 'Basic Form'}).getByRole('textbox', {name: "Email"}).click()
  await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox',{name:'Password'}).click()

  await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText :'Sign in'}).getByRole('textbox', {name: 'Email'}).click()

  //not recommended

  await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).click()
})

test ('Reusing the locators', async({page})=> {
  const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'})
  const emailField = basicForm.getByRole('textbox', {name: 'Email'})

  await emailField.fill('test@test.com')
  await basicForm.getByRole('textbox', {name: 'Password'}).fill('welcome123')
  await basicForm.locator('nb-checkbox').click()
  await basicForm.getByRole('button').click()

  await expect(emailField).toHaveValue('test@test.com')

})

test ('extracting Value', async({page})=> {
  // single text
  const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'})
  const buttonText = await basicForm.getByRole('button').textContent()
  expect(buttonText).toEqual('Submit')

  //multiple texts
  const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
  expect(allRadioButtonsLabels).toContain('Option 1')

  //Input Value
    const emailField = basicForm.getByRole('textbox', {name: 'Email'})
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')

    const placeHolderValue = await emailField.getAttribute('placeholder')
    expect(placeHolderValue).toEqual('Email')
})

test('Assertions', async({page})=>{
    const basicFormButton = page.locator('nb-card').filter({hasText: 'Basic Form'}).locator('button')

    //general assertions
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    //Locator assertions
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Locators
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()
})


