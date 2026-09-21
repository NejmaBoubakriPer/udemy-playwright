import test, { expect } from '@playwright/test'
import { Row } from 'ng2-smart-table/lib/lib/data-set/row'
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

  test('Tooltip', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()
    await page.getByRole('button', {name: 'Top'}).hover()
    await expect(page.locator('nb-tooltip')).toHaveText('This is a tooltip')
    })

    test('Dialogs', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog =>{
      expect(dialog.message()).toEqual('Are you sure you want to delete?')
      dialog.accept()
    })
    await page.locator('tr', {hasText: 'mdo@gmail.com'}).locator('.nb-trash').click()
    await expect(page.locator('tr', {hasText: 'mdo@gmail.com'})).not.toBeVisible()
    })


    test('Tables', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    // how to select a raw by any visible text
    const tableRowByEmail = page.getByRole('row', {name: 'twitter@outlook.com'})
    await tableRowByEmail.locator('.nb-edit').click()
    await expect(tableRowByEmail.locator('.nb-checkmark')).toBeVisible()
    await tableRowByEmail.getByPlaceholder('Age').fill('30')
    await tableRowByEmail.locator('.nb-checkmark').click()
    await expect(tableRowByEmail.locator('td').last()).toHaveText('30')

     // how to select a raw by specific colum value
    const tableRowByID = page.getByRole('row').filter({has: page.getByRole('cell').nth(1).getByText('10')})
    await tableRowByID.locator('.nb-edit').click()
    await expect(page.locator('tbody').getByPlaceholder('E-mail')).toBeVisible()
    await page.locator('tbody').getByPlaceholder('E-mail').fill('test@test.com')
    await page.locator('tbody').locator('.nb-checkmark').click()
    await expect(tableRowByID.locator('td').nth(5)).toHaveText('test@test.com')

    //loop through table rows
    const ages = ['20', '30', '40', '200']

    for (let age of ages){
      await page.getByPlaceholder('Age').fill(age)
      if (age == '200'){
        await expect (page.locator('tbody')).toContainText('No data found')
      }
      else{
        await expect(page.locator('tbody tr').first().locator('td').last()).toHaveText(age)
        const allTableRows = await page.locator('tbody tr').all()
        for (let row of allTableRows){
          await expect (row.locator('td').last()).toHaveText(age)
        }
      }
    }

    })


      test('Datepicker', async({page}) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
    const calenderInputField = page.getByPlaceholder('Form Picker')
    await calenderInputField.click()

    const date = new Date()
    date.setDate(date.getDate() + 300)
    const expectedDate = date.getDate().toString()
    const expectedMonth = date.toLocaleDateString('EN-US', {month:'short'})
    const expectedMonthLong = date.toLocaleDateString('EN-US', {month:'long'})

    const expectedYear = date.getFullYear()

    let currentMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
    while (!currentMonthAndYear?.includes(expectedMonthAndYear)){
      await page.locator('.next-month').click()
      currentMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    }


    const expectedFinalDate = `${expectedMonth} ${expectedDate}, ${expectedYear}`
    await page.locator('.day-cell:not(.bounding-month)').getByText(expectedDate,{exact: true}).click()
    await expect(calenderInputField).toHaveValue(expectedFinalDate)
     })
