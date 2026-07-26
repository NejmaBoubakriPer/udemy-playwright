import test, { expect } from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach('Before all Test Suits',async ({page}) => {
  await page.goto('http://localhost:4200/')
})

test.describe('Form Layouts page', () => {
  test.beforeEach(async({page})=>{
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
  })

  test('Input Fields', async({page}) => {
    const usingtheGridInputEmail = page.locator('nb-card', {hasText: 'Using The Grid'}).getByRole('textbox',{name: 'Email'})
    await usingtheGridInputEmail.fill('test@test.com')
    await usingtheGridInputEmail.clear()
    await usingtheGridInputEmail.pressSequentially('test2@test.com', {delay:100})

    //generec assertion:
    const inputValue = await usingtheGridInputEmail.inputValue()
    expect(inputValue).toEqual('test2@test.com')

    //locator assertion
    await expect(usingtheGridInputEmail).toHaveValue('test2@test.com')

  })

  test('Radio Button', async({page}) => {
    const usingtheGriForm = page.locator('nb-card', {hasText: 'Using The Grid'})
   // await usingtheGriForm.getByLabel('Option 1').check({force:true})
    await usingtheGriForm.getByRole('radio',{name:'Option 1'}).check({force:true})

    //generic assertion
    const statusRadio = await usingtheGriForm.getByRole('radio',{name:'Option 1'}).isChecked()
    expect(statusRadio).toBeTruthy()
  })
})
