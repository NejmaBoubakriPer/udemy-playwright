//import { PageManager } from './../page-objects/page-manager';
import { test } from '../fixture'
import {faker} from '@faker-js/faker'


test ('Navigate to form layout page',async({pageManager})=> {
  await pageManager.navigateTo.formLayoutsPage()
  await pageManager.navigateTo.datePickerPage()
  await pageManager.navigateTo.smartTablePage()
  await pageManager.navigateTo.toasterPage()
  await pageManager.navigateTo.tooltipPage()

})


test ('Parametrize page object methods',async({pageManager})=> {

  const randomFullName = faker.person.fullName()
  const randomEmail = faker.internet.email({provider: 'test.com'})

  await pageManager.navigateTo.formLayoutsPage()
  await pageManager.formLayoutPage.submitUsingTheGridForm(process.env.EMAIL_USER!,'welcome','Option 1')
  //await page.waitForTimeout(500)
  //await page.screenshot({path: 'screenshots/formLayoutPage.png'})
  //const formLayoutBuffer = await page.screenshot()
  await pageManager.formLayoutPage.submitInlineForm(`${randomFullName}`, `${randomEmail}`,true)
  //await page.locator('nb-card', {hasText: 'Inline Form'}).screenshot({path: 'screenshots/InlineForm.png'})
  await pageManager.navigateTo.datePickerPage()
  await pageManager.datePicker.selectCommunDatePickerFromToday(5)
  await pageManager.datePicker.selectDatePickerWithRangeFromToday(5,10)
})