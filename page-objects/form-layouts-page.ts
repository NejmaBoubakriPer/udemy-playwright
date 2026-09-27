import { Page } from "@playwright/test";
import {step} from '../helpers/test-step-decorator'
import {HelperBase} from './helper-base'


export class FormLayoutsPage extends HelperBase{

     constructor(page: Page){
        super(page)
    }

    @step
    async submitUsingTheGridForm(email:string, password: string, optionText: string){
        const usingtheGriForm = this.page.locator('nb-card', {hasText: 'Using The Grid'})
        await usingtheGriForm.getByRole('textbox',{name: 'Email'}).fill(email)
        await usingtheGriForm.getByRole('textbox',{name: 'Password'}).fill(password)
        await usingtheGriForm.getByLabel(optionText).check({force:true})
        await usingtheGriForm.getByRole('button',{name: 'Sign in'}).click()

    }


    /**
     * this method submits a form with check box 
     * @param fullName : valid test user name
     * @param email 
     * @param rememberMeCheckBox 
     */
    @step
    async submitInlineForm(fullName:string, email: string, rememberMeCheckBox: boolean){
        const inlineForm = this.page.locator('nb-card', {hasText: 'Inline Form'})
        await inlineForm.getByRole('textbox',{name: 'Jane Doe'}).fill(fullName)
        await inlineForm.getByRole('textbox',{name: 'Email'}).fill(email)

        if (rememberMeCheckBox==true){
        await inlineForm.getByRole('checkbox').check({force:true})

        }
        await inlineForm.getByRole('button',{name: 'Submit'}).click()

    }
}