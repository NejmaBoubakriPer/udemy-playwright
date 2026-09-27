import { expect, Page } from "@playwright/test";
import {step} from '../helpers/test-step-decorator'

export class DatePickerPage{
    private readonly page: Page
    constructor(page: Page){
        this.page = page
    }

    @step
    async selectCommunDatePickerFromToday(daysFromToday:number){
        const calenderInputField = this.page.getByPlaceholder('Form Picker')
        await calenderInputField.click()
        const expectedDate =await this.selectDateInPicker(daysFromToday)
        await expect(calenderInputField).toHaveValue(expectedDate)
          
    }
    @step
     async selectDatePickerWithRangeFromToday(daysFromTodayStart:number, daysFromTodayEnd:number){
        const calenderInputField = this.page.getByPlaceholder('Range Picker')
        await calenderInputField.click()
        const expectedDateStart =await this.selectDateInPicker(daysFromTodayStart)
        const expectedDateEnd =await this.selectDateInPicker(daysFromTodayEnd)
        const expectedRange = `${expectedDateStart} - ${expectedDateEnd}`
        await expect(calenderInputField).toHaveValue(expectedRange)
    }

    private async selectDateInPicker(daysFromToday:number){
        const date = new Date()
        date.setDate(date.getDate() + daysFromToday)
        const expectedDay = date.getDate().toString()
        const expectedMonth = date.toLocaleDateString('EN-US', {month:'short'})
        const expectedMonthLong = date.toLocaleDateString('EN-US', {month:'long'})
        const expectedYear = date.getFullYear()
        const expectedDate = `${expectedMonth} ${expectedDay}, ${expectedYear}`
        
        let currentMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
        while (!currentMonthAndYear?.includes(expectedMonthAndYear)){
              await this.page.locator('.next-month').click()
              currentMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
        
        await this.page.locator('.day-cell:not(.bounding-month)').getByText(expectedDay,{exact: true}).click()
        return expectedDate
            
    }
}