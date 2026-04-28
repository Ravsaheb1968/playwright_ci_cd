# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> End to flow Login to Remove Cart  >> Login to Add to Cart amit1.patil1@testmail.com 
- Location: tests\endtoend.spec.js:14:13

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Delete' }) resolved to 4 elements:
    1) <input type="button" value="Delete" class="button-2 delete-address-button" onclick="if (confirm('Are you sure?')) {location.href='/customer/addressdelete/4898254';}"/> aka getByRole('button', { name: 'Delete' }).first()
    2) <input type="button" value="Delete" class="button-2 delete-address-button" onclick="if (confirm('Are you sure?')) {location.href='/customer/addressdelete/4898264';}"/> aka getByRole('button', { name: 'Delete' }).nth(1)
    3) <input type="button" value="Delete" class="button-2 delete-address-button" onclick="if (confirm('Are you sure?')) {location.href='/customer/addressdelete/4898297';}"/> aka getByRole('button', { name: 'Delete' }).nth(2)
    4) <input type="button" value="Delete" class="button-2 delete-address-button" onclick="if (confirm('Are you sure?')) {location.href='/customer/addressdelete/4898298';}"/> aka getByRole('button', { name: 'Delete' }).nth(3)

Call log:
  - waiting for getByRole('button', { name: 'Delete' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "amit1.patil1@testmail.com" [ref=e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=e13]:
          - link "Log out" [ref=e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e45]:
        - strong [ref=e47]: My account
        - list [ref=e49]:
          - listitem [ref=e50]:
            - link "Customer info" [ref=e51] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e52]:
            - link "Addresses" [ref=e53] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e54]:
            - link "Orders" [ref=e55] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e56]:
            - link "Downloadable products" [ref=e57] [cursor=pointer]:
              - /url: /customer/downloadableproducts
          - listitem [ref=e58]:
            - link "Back in stock subscriptions" [ref=e59] [cursor=pointer]:
              - /url: /customer/backinstocksubscriptions
          - listitem [ref=e60]:
            - link "Reward points" [ref=e61] [cursor=pointer]:
              - /url: /customer/rewardpoints
          - listitem [ref=e62]:
            - link "Change password" [ref=e63] [cursor=pointer]:
              - /url: /customer/changepassword
      - generic [ref=e65]:
        - heading "My account - Addresses" [level=1] [ref=e67]
        - generic [ref=e68]:
          - generic [ref=e69]:
            - generic [ref=e70]:
              - strong [ref=e72]: Amit1 Patil
              - list [ref=e73]:
                - listitem [ref=e74]: Amit1 Patil
                - listitem [ref=e75]: "Email: amit1.patil1@testmail.com"
                - listitem [ref=e76]: "Phone number: 9741885077"
                - listitem [ref=e77]: "Fax number: 03213468740"
                - listitem [ref=e78]: Infosys
                - listitem [ref=e79]: Street 364
                - listitem [ref=e80]: Apt 49
                - listitem [ref=e81]: Chennai, 426843
                - listitem [ref=e82]: India
              - generic [ref=e83]:
                - button "Edit" [ref=e84] [cursor=pointer]
                - button "Delete" [ref=e85] [cursor=pointer]
            - generic [ref=e86]:
              - strong [ref=e88]: Amit1 Patil
              - list [ref=e89]:
                - listitem [ref=e90]: Amit1 Patil
                - listitem [ref=e91]: "Email: amit1.patil1@testmail.com"
                - listitem [ref=e92]: "Phone number: 9741885077"
                - listitem [ref=e93]: "Fax number: 03213468740"
                - listitem [ref=e94]: Infosys
                - listitem [ref=e95]: Street 364
                - listitem [ref=e96]: Apt 49
                - listitem [ref=e97]: Chennai, 426843
                - listitem [ref=e98]: India
              - generic [ref=e99]:
                - button "Edit" [ref=e100] [cursor=pointer]
                - button "Delete" [ref=e101] [cursor=pointer]
            - generic [ref=e102]:
              - strong [ref=e104]: Amit1 Patil
              - list [ref=e105]:
                - listitem [ref=e106]: Amit1 Patil
                - listitem [ref=e107]: "Email: amit1.patil1@testmail.com"
                - listitem [ref=e108]: "Phone number: 9741885077"
                - listitem [ref=e109]: "Fax number: 03213468740"
                - listitem [ref=e110]: Infosys
                - listitem [ref=e111]: Street 364
                - listitem [ref=e112]: Apt 49
                - listitem [ref=e113]: Chennai, 426843
                - listitem [ref=e114]: India
              - generic [ref=e115]:
                - button "Edit" [ref=e116] [cursor=pointer]
                - button "Delete" [ref=e117] [cursor=pointer]
            - generic [ref=e118]:
              - strong [ref=e120]: Amit1 Patil
              - list [ref=e121]:
                - listitem [ref=e122]: Amit1 Patil
                - listitem [ref=e123]: "Email: amit1.patil1@testmail.com"
                - listitem [ref=e124]: "Phone number: 9741885077"
                - listitem [ref=e125]: "Fax number: 03213468740"
                - listitem [ref=e126]: Infosys
                - listitem [ref=e127]: Street 364
                - listitem [ref=e128]: Apt 49
                - listitem [ref=e129]: Chennai, 426843
                - listitem [ref=e130]: India
              - generic [ref=e131]:
                - button "Edit" [ref=e132] [cursor=pointer]
                - button "Delete" [ref=e133] [cursor=pointer]
          - button "Add new" [ref=e135] [cursor=pointer]
  - generic [ref=e136]:
    - generic [ref=e137]:
      - generic [ref=e138]:
        - heading "Information" [level=3] [ref=e139]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "Sitemap" [ref=e142] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e143]:
            - link "Shipping & Returns" [ref=e144] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e145]:
            - link "Privacy Notice" [ref=e146] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e147]:
            - link "Conditions of Use" [ref=e148] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e149]:
            - link "About us" [ref=e150] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e151]:
            - link "Contact us" [ref=e152] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e153]:
        - heading "Customer service" [level=3] [ref=e154]
        - list [ref=e155]:
          - listitem [ref=e156]:
            - link "Search" [ref=e157] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e158]:
            - link "News" [ref=e159] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e160]:
            - link "Blog" [ref=e161] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e162]:
            - link "Recently viewed products" [ref=e163] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e164]:
            - link "Compare products list" [ref=e165] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e166]:
            - link "New products" [ref=e167] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e168]:
        - heading "My account" [level=3] [ref=e169]
        - list [ref=e170]:
          - listitem [ref=e171]:
            - link "My account" [ref=e172] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e173]:
            - link "Orders" [ref=e174] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e175]:
            - link "Addresses" [ref=e176] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e177]:
            - link "Shopping cart" [ref=e178] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e179]:
            - link "Wishlist" [ref=e180] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e181]:
        - heading "Follow us" [level=3] [ref=e182]
        - list [ref=e183]:
          - listitem [ref=e184]:
            - link "Facebook" [ref=e185] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e186]:
            - link "Twitter" [ref=e187] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e188]:
            - link "RSS" [ref=e189] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e190]:
            - link "YouTube" [ref=e191] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e192]:
            - link "Google+" [ref=e193] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e194]:
      - text: Powered by
      - link "nopCommerce" [ref=e195] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e196]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
> 18 |         await locator.click();
     |                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Delete' }) resolved to 4 elements:
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