import { Locator, Page } from "@playwright/test";
import {step} from "../helpers/test-step-decorator"
import {HelperBase} from './helper-base'
export class NavigationPage extends HelperBase{

    // This is the recommended style by playwrghit 
    // Option 2 is to just declare here the page and the others inside the methods 
    // Option 2 is cleaner specially for big pages with a lot locators 
    private readonly formLayoutsMenu: Locator
    private readonly datePickerMenu: Locator
    private readonly toasterMenu: Locator
    private readonly tooltipMenu: Locator
    private readonly smartTableMenu: Locator


    constructor(page: Page){
        super(page)
        this.formLayoutsMenu = page.getByText('Form Layout')
        this.datePickerMenu = page.getByText('Datepicker')
        this.toasterMenu = page.getByText('Toastr')
        this.tooltipMenu = page.getByText('Tooltip')
        this.smartTableMenu = page.getByText('Smart Table')

    }
    @step
    async formLayoutsPage(){
    await this.selectGroupMenuItem('Forms')
    await this.formLayoutsMenu.click()
    }

    @step
    async datePickerPage(){
    await this.selectGroupMenuItem('Forms')
    await this.datePickerMenu.click()
    }
    @step
     async toasterPage(){
    await this.selectGroupMenuItem('Modal & Overlays')
    await this.toasterMenu.click()
    }
    @step
    async tooltipPage(){
    await this.selectGroupMenuItem('Modal & Overlays')
    await this.tooltipMenu.click()
    }
    @step
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