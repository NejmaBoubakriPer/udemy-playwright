import { PageManagegr } from './../page-objects/page-manager';
import { test } from '@playwright/test'


test.beforeEach('Before all Tests',async ({page}) => {
  await page.goto('https://playground.bondaracademy.com')
})

test ('Navigate to form layout page',async({page})=> {
  const pageManager = new PageManagegr(page)
  await pageManager.navigateTo.formLayoutsPage()
  await pageManager.navigateTo.datePickerPage()
  await pageManager.navigateTo.smartTablePage()
  await pageManager.navigateTo.toasterPage()
  await pageManager.navigateTo.tooltipPage()

})


test ('Parametrize page object methods',async({page})=> {
  const pageManager = new PageManagegr(page)  
  await pageManager.navigateTo.formLayoutsPage()
  await pageManager.formLayoutPage.submitUsingTheGridForm('artem@test.com','welcome','Option 1')
  await pageManager.formLayoutPage.submitInlineForm('Nejma', 'artem@test.com',true)
  await pageManager.navigateTo.datePickerPage()
  await pageManager.datePicker.selectCommunDatePickerFromToday(5)
  await pageManager.datePicker.selectDatePickerWithRangeFromToday(5,10)
})