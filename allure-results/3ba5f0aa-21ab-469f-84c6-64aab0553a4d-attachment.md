# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> End to flow Login to Remove Cart  >> Login to Add to Cart amit1.patil1@testmail.com 
- Location: tests\endtoend.spec.js:14:13

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('checkbox', { name: 'removefromcart' })

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class Basepage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async navigate() {
  10 |         await this.page.goto("https://demowebshop.tricentis.com/");
  11 |     }
  12 | 
  13 |     async getPageTitle() {
  14 |         return await this.page.getTitle();
  15 |     }
  16 | 
  17 |     async click(locator) {
  18 |         await locator.click();
  19 |     }
  20 | 
  21 |     async fill(locator, value) {
  22 |         await locator.fill(value);
  23 |     }
  24 | 
  25 |     // 👁 Wait for visibility
  26 |     async waitForVisible(locator) {
  27 |         await locator.waitFor({ state: 'visible' });
  28 |     }
  29 | 
  30 |     async getText(locator){
  31 |         return await locator.textContext();
  32 |     }
  33 | 
  34 |     async select(locator, value){
  35 |         await locator.selectOption(value);
  36 |     }
  37 | 
  38 |     async checkboxSelect(locator){
> 39 |         await locator.check();
     |                       ^ Error: locator.check: Target page, context or browser has been closed
  40 |     }
  41 |     async takeScreenshot(name = 'screenshot'){
  42 |         await this.page.screenshot({path:`screenshots/${name}.png`});
  43 |     }
  44 | 
  45 | }
```