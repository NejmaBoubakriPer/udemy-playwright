import { Page } from '@playwright/test'

export class HelperBase{

    protected readonly page: Page
    
      constructor(page: Page){
        this.page = page
        }

    protected  async getToasterMessage(){
            //this is the method
            return 'this is the message'
        }
}