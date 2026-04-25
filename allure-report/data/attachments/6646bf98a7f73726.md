# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoshoplogin.spec.js >> Demoshop Login Page
- Location: tests\demoshoplogin.spec.js:9:5

# Error details

```
Error: page.click: selector: expected string, got object
```

# Test source

```ts
  1  | 
  2  | import {Basepage} from "./Basepage.js";
  3  | 
  4  | export class LoginPage extends Basepage {
  5  | 
  6  |     constructor(page) {
  7  |         super(page);
  8  | 
  9  |         this.loginlink =  this.page.getByRole("link", { name: "Log in" });
  10 |         this.username =  this.page.getByRole("textbox", { name: "Email" });
  11 |         this.password =  this.page.getByRole("textbox", { name: "Password" });
  12 |         this.loginbtn =  this.page.locator(".button-1.login-button");
  13 | 
  14 |     }
  15 | 
  16 |     async login(Email, pass) {
  17 | 
> 18 |         this.page.click(this.loginlink);
     |                   ^ Error: page.click: selector: expected string, got object
  19 |         this.page.fill(this.username, this.Email);
  20 |         this.page.fill(this.password, this.pass);
  21 |         this.page.click(this.loginbtn);
  22 |     }
  23 | 
  24 | }
```