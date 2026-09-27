import { Page } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigation-page'
import { FormLayoutsPage } from '../page-objects/form-layouts-page'
import { DatePickerPage } from '../page-objects/date-picker-page'

export class PageManagegr{

    readonly navigateTo:  NavigationPage
    readonly formLayoutPage:  FormLayoutsPage
    readonly datePicker: DatePickerPage
      constructor(page: Page){
        this.navigateTo = new NavigationPage(page)
        this.formLayoutPage = new FormLayoutsPage(page)
        this.datePicker = new DatePickerPage(page)
    }
}