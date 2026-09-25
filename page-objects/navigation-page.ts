import { Locator, Page } from "@playwright/test";

export class NavigationPage{

    private readonly page: Page
    private readonly formLayoutsMenu: Locator
    private readonly datePickerMenu: Locator
    private readonly toasterMenu: Locator
    private readonly tooltipMenu: Locator
    private readonly smartTableMenu: Locator


    constructor(page: Page){
        this.page = page
        this.formLayoutsMenu = page.getByText('Form Layout')
        this.datePickerMenu = page.getByText('Datepicker')
        this.toasterMenu = page.getByText('Toastr')
        this.tooltipMenu = page.getByText('Tooltip')
        this.smartTableMenu = page.getByText('Smart Table')

    }
    async formLayoutsPage(){
    await this.selectGroupMenuItem('Forms')
    await this.formLayoutsMenu.click()
    }

    async datePickerPage(){
    await this.selectGroupMenuItem('Forms')
    await this.datePickerMenu.click()
    }

     async toasterPage(){
    await this.selectGroupMenuItem('Modal & Overlays')
    await this.toasterMenu.click()
    }

    async tooltipPage(){
    await this.selectGroupMenuItem('Modal & Overlays')
    await this.tooltipMenu.click()
    }

    async smartTablePage(){
    await this.selectGroupMenuItem('Tables & Data')
    await this.smartTableMenu.click()
    }

    private async selectGroupMenuItem(groupMenuTitle: string){
        const groupeMenuItem = this.page.getByTitle(groupMenuTitle);
        const expandedState = await groupeMenuItem.getAttribute('aria-expanded')
        if(expandedState=='false'){
            console.log(expandedState)
            await groupeMenuItem.click()
        }

    }
}