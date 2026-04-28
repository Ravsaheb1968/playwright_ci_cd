# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> End to flow Login to Remove Cart  >> Login to Add to Cart ravi95.sharma95@testmail.com 
- Location: tests\endtoend.spec.js:14:13

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Books' }) resolved to 2 elements:
    1) <a href="/books">Books↵        </a> aka getByRole('link', { name: 'Books' }).first()
    2) <a href="/books">Books↵        </a> aka getByRole('link', { name: 'Books' }).nth(1)

Call log:
  - waiting for getByRole('link', { name: 'Books' })
    - waiting for" https://demowebshop.tricentis.com/" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"
    - locator resolved to <a href="/books">Books↵        </a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

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
> 18 |         return await locator.click();
     |                              ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Books' }) resolved to 2 elements:
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
  37 |     async takeScreenshot(name = 'screenshot'){
  38 |         await this.page.screenshot({path:`screenshots/${name}.png`});
  39 |     }
  40 | 
  41 | }
```