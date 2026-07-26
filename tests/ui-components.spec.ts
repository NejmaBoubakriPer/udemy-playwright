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
    // locator assertion
    await expect(usingtheGriForm.getByRole('radio',{name:'Option 1'})).toBeChecked()

    //Check the second option
    await usingtheGriForm.getByRole('radio',{name:'Option 2'}).check({force:true})
    await expect(usingtheGriForm.getByRole('radio',{name:'Option 2'})).toBeChecked()

    expect(await usingtheGriForm.getByRole('radio',{name:'Option 1'}).isChecked()).toBeFalsy()


  })
})


  test('Check Box', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    //Check method check the status of the check box
    await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force:true})
    await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).check({force:true})


    const allCheckBox = page.getByRole('checkbox')
    for (const box of await allCheckBox.all()){
      //await box.check({force: true})
      //expect(await box.isChecked()).toBeTruthy()
      await box.uncheck({force: true})
      expect(await box.isChecked()).toBeFalsy()
    }
})

  test('lists & dropdown', async({page}) => {
    const dorpDownMenu = page.locator('ngx-header nb-select')
    await dorpDownMenu.click()

    page.getByRole('list') // when list has ul tag (the options also)
    page.getByRole('listitem') // when list hast li tag (the options also)

    //const listOfOptions = await page.locator('list').locator('nb-option')
    const listOfOptions = page.locator('nb-option-list nb-option')
    await expect(listOfOptions).toHaveText(['Light', 'Dark', ' Cosmic', ' Corporate'])
    await listOfOptions.filter({hasText:'Cosmic'}).click()

    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color','rgb(50, 50, 89)')
    })
