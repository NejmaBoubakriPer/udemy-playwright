import { test } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigation-page'
import { FormLayoutsPage } from '../page-objects/form-layouts-page'

test.beforeEach('Before all Tests',async ({page}) => {
  await page.goto('https://playground.bondaracademy.com')
})

test ('Navigate to form layout page',async({page})=> {
  const navigateTo = new NavigationPage(page)
  await navigateTo.formLayoutsPage()
  await navigateTo.datePickerPage()
  await navigateTo.smartTablePage()
  await navigateTo.toasterPage()
  await navigateTo.tooltipPage()

})


test ('Parametrize page object methods',async({page})=> {
  const navigateTo = new NavigationPage(page)
  const formLayoutPage = new FormLayoutsPage(page)
  await navigateTo.formLayoutsPage()
  await formLayoutPage.submitUsingTheGridForm('artem@test.com','welcome','Option 1')
  await formLayoutPage.submitInlineForm('Nejma', 'artem@test.com',true)
})