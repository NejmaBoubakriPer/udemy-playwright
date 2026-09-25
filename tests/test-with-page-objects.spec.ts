import { test } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigation-page'

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