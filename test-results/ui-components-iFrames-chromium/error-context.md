# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui-components.spec.ts >> iFrames
- Location: tests/ui-components.spec.ts:200:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Open Dialog with esc close' })

```

# Page snapshot

```yaml
- generic [ref=e7]:
  - navigation [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - link [ref=e13] [cursor=pointer]:
            - /url: "#"
            - img [ref=e15]
          - link "Playground" [ref=e23] [cursor=pointer]:
            - /url: "#"
        - button "Light" [ref=e25] [cursor=pointer]:
          - generic [ref=e26]: Light
          - img [ref=e28]
      - generic [ref=e34]:
        - button [active] [ref=e37] [cursor=pointer]:
          - img [ref=e39]
        - link [ref=e45] [cursor=pointer]:
          - /url: "#"
          - img [ref=e47]
        - link [ref=e53] [cursor=pointer]:
          - /url: "#"
          - img [ref=e55]
        - generic [ref=e65] [cursor=pointer]: Nick Jones
  - generic [ref=e66]:
    - list [ref=e71]:
      - listitem [ref=e72]:
        - link "IoT Dashboard" [ref=e73] [cursor=pointer]:
          - /url: /pages/iot-dashboard
          - img [ref=e75]
          - generic: IoT Dashboard
      - listitem [ref=e80]:
        - generic [ref=e81]: FEATURES
      - listitem [ref=e82]:
        - link "Forms" [ref=e83] [cursor=pointer]:
          - /url: "#"
          - img [ref=e85]
          - generic: Forms
          - img [ref=e92]
        - list:
          - listitem [ref=e97]:
            - link "Form Layouts" [ref=e98] [cursor=pointer]:
              - /url: /pages/forms/layouts
              - generic: Form Layouts
          - listitem [ref=e99]:
            - link "Datepicker" [ref=e100] [cursor=pointer]:
              - /url: /pages/forms/datepicker
              - generic: Datepicker
      - listitem [ref=e101]:
        - link "Modal & Overlays" [expanded] [ref=e102] [cursor=pointer]:
          - /url: "#"
          - img [ref=e104]
          - generic: Modal & Overlays
          - img [ref=e112]
        - list [ref=e117]:
          - listitem [ref=e118]:
            - link "Dialog" [ref=e119] [cursor=pointer]:
              - /url: /pages/modal-overlays/dialog
              - generic: Dialog
          - listitem [ref=e120]:
            - link "Window" [ref=e121] [cursor=pointer]:
              - /url: /pages/modal-overlays/window
              - generic: Window
          - listitem [ref=e122]:
            - link "Popover" [ref=e123] [cursor=pointer]:
              - /url: /pages/modal-overlays/popover
              - generic: Popover
          - listitem [ref=e124]:
            - link "Toastr" [ref=e125] [cursor=pointer]:
              - /url: /pages/modal-overlays/toastr
              - generic: Toastr
          - listitem [ref=e126]:
            - link "Tooltip" [ref=e127] [cursor=pointer]:
              - /url: /pages/modal-overlays/tooltip
              - generic: Tooltip
      - listitem [ref=e128]:
        - link "Extra Components" [ref=e129] [cursor=pointer]:
          - /url: "#"
          - img [ref=e131]
          - generic: Extra Components
          - img [ref=e140]
        - list:
          - listitem [ref=e145]:
            - link "Calendar" [ref=e146] [cursor=pointer]:
              - /url: /pages/extra-components/calendar
              - generic: Calendar
          - listitem [ref=e147]:
            - link "Drag & Drop" [ref=e148] [cursor=pointer]:
              - /url: /pages/extra-components/drag-drop
              - generic: Drag & Drop
          - listitem [ref=e149]:
            - link "PDF Download" [ref=e150] [cursor=pointer]:
              - /url: /pages/extra-components/pdf-download
              - generic: PDF Download
      - listitem [ref=e151]:
        - link "Charts" [ref=e152] [cursor=pointer]:
          - /url: "#"
          - img [ref=e154]
          - generic: Charts
          - img [ref=e161]
        - list:
          - listitem [ref=e166]:
            - link "Echarts" [ref=e167] [cursor=pointer]:
              - /url: /pages/charts/echarts
              - generic: Echarts
      - listitem [ref=e168]:
        - link "Tables & Data" [ref=e169] [cursor=pointer]:
          - /url: "#"
          - img [ref=e171]
          - generic: Tables & Data
          - img [ref=e180]
        - list:
          - listitem [ref=e185]:
            - link "Smart Table" [ref=e186] [cursor=pointer]:
              - /url: /pages/tables/smart-table
              - generic: Smart Table
          - listitem [ref=e187]:
            - link "Tree Grid" [ref=e188] [cursor=pointer]:
              - /url: /pages/tables/tree-grid
              - generic: Tree Grid
      - listitem [ref=e189]:
        - link "Auth" [ref=e190] [cursor=pointer]:
          - /url: "#"
          - img [ref=e192]
          - generic: Auth
          - img [ref=e199]
        - list:
          - listitem [ref=e204]:
            - link "Login" [ref=e205] [cursor=pointer]:
              - /url: /auth/login
              - generic: Login
          - listitem [ref=e206]:
            - link "Register" [ref=e207] [cursor=pointer]:
              - /url: /auth/register
              - generic: Register
          - listitem [ref=e208]:
            - link "Request Password" [ref=e209] [cursor=pointer]:
              - /url: /auth/request-password
              - generic: Request Password
          - listitem [ref=e210]:
            - link "Reset Password" [ref=e211] [cursor=pointer]:
              - /url: /auth/reset-password
              - generic: Reset Password
    - generic [ref=e212]:
      - generic [ref=e217]:
        - generic [ref=e219]:
          - generic [ref=e220]: Open Dialog
          - generic [ref=e221]:
            - button "Open Dialog with component" [ref=e222] [cursor=pointer]
            - button "Open Dialog with template" [ref=e223] [cursor=pointer]
        - generic [ref=e225]:
          - generic [ref=e226]: Open Dialog With Delay
          - generic [ref=e227]:
            - button "Open with delay 3 seconds" [ref=e228] [cursor=pointer]
            - button "Open with delay 10 seconds" [ref=e229] [cursor=pointer]
        - iframe [ref=e231]:
          - generic [ref=f1e2]:
            - generic [ref=f1e3]: iFrame Dialog
            - generic [ref=f1e4]:
              - button "Open Dialog with esc close" [ref=f1e5] [cursor=pointer]
              - button "Open Dialog without esc close" [ref=f1e6] [cursor=pointer]
        - generic [ref=e233]:
          - generic [ref=e234]: Open Without Backdrop Click
          - generic [ref=e235]:
            - button "Open Dialog with backdrop click" [ref=e236] [cursor=pointer]
            - button "Open without backdrop click" [ref=e237] [cursor=pointer]
        - generic [ref=e239]:
          - generic [ref=e240]: Random dialog
          - generic [ref=e241]:
            - button "Enter Name" [ref=e242] [cursor=pointer]
            - heading "Names:" [level=3] [ref=e243]
            - list
      - navigation [ref=e245]:
        - generic [ref=e246]:
          - generic [ref=e247]:
            - text: Created by
            - link "Akveo" [ref=e249] [cursor=pointer]:
              - /url: https://akveo.page.link/8V2f
            - text: . Modified by
            - link "Bondar Academy" [ref=e251] [cursor=pointer]:
              - /url: https://www.bondaracademy.com
            - text: .
          - generic [ref=e252]:
            - link "" [ref=e253] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e254] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e255] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e256] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  104 | 
  105 | 
  106 |     test('Tables', async({page}) => {
  107 |     await page.getByText('Tables & Data').click()
  108 |     await page.getByText('Smart Table').click()
  109 | 
  110 |     // how to select a raw by any visible text
  111 |     const tableRowByEmail = page.getByRole('row', {name: 'twitter@outlook.com'})
  112 |     await tableRowByEmail.locator('.nb-edit').click()
  113 |     await expect(tableRowByEmail.locator('.nb-checkmark')).toBeVisible()
  114 |     await tableRowByEmail.getByPlaceholder('Age').fill('30')
  115 |     await tableRowByEmail.locator('.nb-checkmark').click()
  116 |     await expect(tableRowByEmail.locator('td').last()).toHaveText('30')
  117 | 
  118 |      // how to select a raw by specific colum value
  119 |     const tableRowByID = page.getByRole('row').filter({has: page.getByRole('cell').nth(1).getByText('10')})
  120 |     await tableRowByID.locator('.nb-edit').click()
  121 |     await expect(page.locator('tbody').getByPlaceholder('E-mail')).toBeVisible()
  122 |     await page.locator('tbody').getByPlaceholder('E-mail').fill('test@test.com')
  123 |     await page.locator('tbody').locator('.nb-checkmark').click()
  124 |     await expect(tableRowByID.locator('td').nth(5)).toHaveText('test@test.com')
  125 | 
  126 |     //loop through table rows
  127 |     const ages = ['20', '30', '40', '200']
  128 | 
  129 |     for (let age of ages){
  130 |       await page.getByPlaceholder('Age').fill(age)
  131 |       if (age == '200'){
  132 |         await expect (page.locator('tbody')).toContainText('No data found')
  133 |       }
  134 |       else{
  135 |         await expect(page.locator('tbody tr').first().locator('td').last()).toHaveText(age)
  136 |         const allTableRows = await page.locator('tbody tr').all()
  137 |         for (let row of allTableRows){
  138 |           await expect (row.locator('td').last()).toHaveText(age)
  139 |         }
  140 |       }
  141 |     }
  142 | 
  143 |     })
  144 | 
  145 | 
  146 |       test('Datepicker', async({page}) => {
  147 |     await page.getByText('Forms').click()
  148 |     await page.getByText('Datepicker').click()
  149 |     const calenderInputField = page.getByPlaceholder('Form Picker')
  150 |     await calenderInputField.click()
  151 | 
  152 |     const date = new Date()
  153 |     date.setDate(date.getDate() + 300)
  154 |     const expectedDate = date.getDate().toString()
  155 |     const expectedMonth = date.toLocaleDateString('EN-US', {month:'short'})
  156 |     const expectedMonthLong = date.toLocaleDateString('EN-US', {month:'long'})
  157 | 
  158 |     const expectedYear = date.getFullYear()
  159 | 
  160 |     let currentMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
  161 |     const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
  162 |     while (!currentMonthAndYear?.includes(expectedMonthAndYear)){
  163 |       await page.locator('.next-month').click()
  164 |       currentMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
  165 |     }
  166 | 
  167 | 
  168 |     const expectedFinalDate = `${expectedMonth} ${expectedDate}, ${expectedYear}`
  169 |     await page.locator('.day-cell:not(.bounding-month)').getByText(expectedDate,{exact: true}).click()
  170 |     await expect(calenderInputField).toHaveValue(expectedFinalDate)
  171 |      })
  172 | 
  173 |      test('Sliders', async({page}) => {
  174 |       const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
  175 | 
  176 |       //Setting the attribute value
  177 |       const tempGauge = tempBox.locator('circle')
  178 |       await tempGauge.evaluate(element => {
  179 |         element.setAttribute('cx','9.403')
  180 |         element.setAttribute('cy','150.278')
  181 |       })
  182 |       await tempGauge.click()
  183 |       await expect(tempBox).toContainText('15')
  184 | 
  185 | 
  186 |       //Use mouse movement
  187 |       await tempBox.scrollIntoViewIfNeeded()
  188 |       const box = await tempBox.boundingBox()
  189 |       const x = box?.x + box?.width / 2
  190 |       const y = box?.y + box?.height / 2
  191 |       await page.mouse.move(x,y)
  192 |       await page.mouse.down()
  193 |       await page.mouse.move(x+100, y)
  194 |       await page.mouse.move(x+100, y+100)
  195 |       await page.mouse.up()
  196 |       await expect(tempBox).toContainText('30')
  197 | 
  198 |        })
  199 | 
  200 |     test('iFrames', async({page}) => {
  201 |     await page.getByText('Modal & Overlays').click()
  202 |     await page.getByText('Dialog').click()
  203 | 
> 204 |     await page.getByRole('button', {name: 'Open Dialog with esc close'}).click()
      |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  205 |     })
  206 | 
```