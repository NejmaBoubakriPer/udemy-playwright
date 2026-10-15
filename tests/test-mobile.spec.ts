
import test, { expect } from '@playwright/test'

test ('Reusing the locators', async({page},testInfo)=> {
    await page.goto('/')
    if (testInfo.project.name === 'mobile-test'){
            await page.locator('.sidebar-toggle').click()
    }
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
    if (testInfo.project.name === 'mobile-test'){
            await page.locator('.sidebar-toggle').click()
    }     
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'})
    const emailField = basicForm.getByRole('textbox', {name: 'Email'})

    await emailField.fill('test@test.com')
    await basicForm.getByRole('textbox', {name: 'Password'}).fill('welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})