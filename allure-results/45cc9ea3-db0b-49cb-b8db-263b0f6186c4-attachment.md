# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> End to flow Login to Remove Cart  >> Login to Add to Cart ankit98.joshi98@testmail.com 
- Location: tests\endtoend.spec.js:14:13

# Error details

```
TypeError: Cannot read properties of undefined (reading 'user')
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

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
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
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
        - textbox [ref=e25]: Search store
        - button "Search" [ref=e26] [cursor=pointer]
    - list [ref=e28]:
      - listitem [ref=e29]:
        - link "Books" [ref=e30] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e31]:
        - link "Computers" [ref=e32] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e33]:
        - link "Electronics" [ref=e34] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e35]:
        - link "Apparel & Shoes" [ref=e36] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e37]:
        - link "Digital downloads" [ref=e38] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e39]:
        - link "Jewelry" [ref=e40] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e41]:
        - link "Gift Cards" [ref=e42] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e43]:
        - generic [ref=e44]:
          - strong [ref=e46]: Categories
          - list [ref=e48]:
            - listitem [ref=e49]:
              - link "Books" [ref=e50] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e51]:
              - link "Computers" [ref=e52] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e53]:
              - link "Electronics" [ref=e54] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e55]:
              - link "Apparel & Shoes" [ref=e56] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e57]:
              - link "Digital downloads" [ref=e58] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e59]:
              - link "Jewelry" [ref=e60] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e61]:
              - link "Gift Cards" [ref=e62] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e63]:
          - strong [ref=e65]: Manufacturers
          - list [ref=e67]:
            - listitem [ref=e68]:
              - link "Tricentis" [ref=e69] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e70]:
          - strong [ref=e72]: Popular tags
          - generic [ref=e73]:
            - list [ref=e75]:
              - listitem [ref=e76]:
                - link "apparel" [ref=e77] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=e78]:
                - link "awesome" [ref=e79] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=e80]:
                - link "book" [ref=e81] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=e82]:
                - link "camera" [ref=e83] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=e84]:
                - link "cell" [ref=e85] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=e86]:
                - link "compact" [ref=e87] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=e88]:
                - link "computer" [ref=e89] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=e90]:
                - link "cool" [ref=e91] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=e92]:
                - link "digital" [ref=e93] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=e94]:
                - link "jeans" [ref=e95] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=e96]:
                - link "jewelry" [ref=e97] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=e98]:
                - link "nice" [ref=e99] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=e100]:
                - link "shirt" [ref=e101] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=e102]:
                - link "shoes" [ref=e103] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=e104]:
                - link "TCP" [ref=e105] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=e107] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=e108]:
        - generic [ref=e109]:
          - strong [ref=e111]: Newsletter
          - generic [ref=e113]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e115]
            - button "Subscribe" [ref=e117] [cursor=pointer]
        - generic [ref=e118]:
          - strong [ref=e120]: Community poll
          - generic [ref=e122]:
            - strong [ref=e123]: Do you like nopCommerce?
            - list [ref=e124]:
              - listitem [ref=e125]:
                - radio "Excellent" [ref=e126]
                - text: Excellent
              - listitem [ref=e127]:
                - radio "Good" [ref=e128]
                - text: Good
              - listitem [ref=e129]:
                - radio "Poor" [ref=e130]
                - text: Poor
              - listitem [ref=e131]:
                - radio "Very bad" [ref=e132]
                - text: Very bad
            - button "Vote" [ref=e134] [cursor=pointer]
      - generic [ref=e137]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=e138]:
          - heading "Welcome to our store" [level=2] [ref=e140]
          - generic [ref=e141]:
            - paragraph [ref=e142]: Welcome to the new Tricentis store!
            - paragraph [ref=e143]: Feel free to shop around and explore everything.
        - generic [ref=e144]:
          - strong [ref=e146]: Featured products
          - generic [ref=e148]:
            - link "Picture of $25 Virtual Gift Card" [ref=e150] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card"
            - generic [ref=e151]:
              - heading "$25 Virtual Gift Card" [level=2] [ref=e152]:
                - link "$25 Virtual Gift Card" [ref=e153] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "824 review(s)" [ref=e154]
              - generic [ref=e157]:
                - generic [ref=e159]: "25.00"
                - button "Add to cart" [ref=e161] [cursor=pointer]
          - generic [ref=e163]:
            - link "Picture of 14.1-inch Laptop" [ref=e165] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop"
            - generic [ref=e166]:
              - heading "14.1-inch Laptop" [level=2] [ref=e167]:
                - link "14.1-inch Laptop" [ref=e168] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1576 review(s)" [ref=e169]
              - generic [ref=e172]:
                - generic [ref=e174]: "1590.00"
                - button "Add to cart" [ref=e176] [cursor=pointer]
          - generic [ref=e178]:
            - link "Picture of Build your own cheap computer" [ref=e180] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer"
            - generic [ref=e181]:
              - heading "Build your own cheap computer" [level=2] [ref=e182]:
                - link "Build your own cheap computer" [ref=e183] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "837 review(s)" [ref=e184]
              - generic [ref=e187]:
                - generic [ref=e189]: "800.00"
                - button "Add to cart" [ref=e191] [cursor=pointer]
          - generic [ref=e193]:
            - link "Picture of Build your own computer" [ref=e195] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer"
            - generic [ref=e196]:
              - heading "Build your own computer" [level=2] [ref=e197]:
                - link "Build your own computer" [ref=e198] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "378 review(s)" [ref=e199]
              - generic [ref=e202]:
                - generic [ref=e204]: "1200.00"
                - button "Add to cart" [ref=e206] [cursor=pointer]
          - generic [ref=e208]:
            - link "Picture of Build your own expensive computer" [ref=e210] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer"
            - generic [ref=e211]:
              - heading "Build your own expensive computer" [level=2] [ref=e212]:
                - link "Build your own expensive computer" [ref=e213] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "426 review(s)" [ref=e214]
              - generic [ref=e217]:
                - generic [ref=e219]: "1800.00"
                - button "Add to cart" [ref=e221] [cursor=pointer]
          - generic [ref=e223]:
            - link "Picture of Simple Computer" [ref=e225] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer"
            - generic [ref=e226]:
              - heading "Simple Computer" [level=2] [ref=e227]:
                - link "Simple Computer" [ref=e228] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "395 review(s)" [ref=e229]
              - generic [ref=e232]:
                - generic [ref=e234]: "800.00"
                - button "Add to cart" [ref=e236] [cursor=pointer]
  - generic [ref=e237]:
    - generic [ref=e238]:
      - generic [ref=e239]:
        - heading "Information" [level=3] [ref=e240]
        - list [ref=e241]:
          - listitem [ref=e242]:
            - link "Sitemap" [ref=e243] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e244]:
            - link "Shipping & Returns" [ref=e245] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e246]:
            - link "Privacy Notice" [ref=e247] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e248]:
            - link "Conditions of Use" [ref=e249] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e250]:
            - link "About us" [ref=e251] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e252]:
            - link "Contact us" [ref=e253] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e254]:
        - heading "Customer service" [level=3] [ref=e255]
        - list [ref=e256]:
          - listitem [ref=e257]:
            - link "Search" [ref=e258] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e259]:
            - link "News" [ref=e260] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e261]:
            - link "Blog" [ref=e262] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e263]:
            - link "Recently viewed products" [ref=e264] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e265]:
            - link "Compare products list" [ref=e266] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e267]:
            - link "New products" [ref=e268] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e269]:
        - heading "My account" [level=3] [ref=e270]
        - list [ref=e271]:
          - listitem [ref=e272]:
            - link "My account" [ref=e273] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e274]:
            - link "Orders" [ref=e275] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e276]:
            - link "Addresses" [ref=e277] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e278]:
            - link "Shopping cart" [ref=e279] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e280]:
            - link "Wishlist" [ref=e281] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e282]:
        - heading "Follow us" [level=3] [ref=e283]
        - list [ref=e284]:
          - listitem [ref=e285]:
            - link "Facebook" [ref=e286] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e287]:
            - link "Twitter" [ref=e288] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e289]:
            - link "RSS" [ref=e290] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e291]:
            - link "YouTube" [ref=e292] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e293]:
            - link "Google+" [ref=e294] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e295]:
      - text: Powered by
      - link "nopCommerce" [ref=e296] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e297]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
> 10 |         await this.page.goto("https://demowebshop.tricentis.com/");
     |                         ^ Error: page.goto: Test ended.
  11 |     }
  12 | 
  13 |     async getPageTitle() {
  14 |         return await this.page.getTitle();
  15 |     }
  16 | 
  17 |     async click(locator) {
  18 |         return await locator.click();
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