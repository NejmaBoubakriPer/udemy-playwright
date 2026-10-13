import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/page-manager';

type TestFixtures = {

    pageManager: PageManager
}

export const test = base.extend<TestFixtures>({

    pageManager: async ({ page }, use) => {
        await page.goto('/')
        const pom = new PageManager(page)
        await use(pom)

    }

})
