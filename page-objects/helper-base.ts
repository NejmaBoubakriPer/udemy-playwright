import { Page } from '@playwright/test'

export class PageManagegr{

    readonly page: Page
    
      constructor(page: Page){
        this.page = page
        }

        
}