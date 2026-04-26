# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerpage.spec.js >> Register the User
- Location: tests\registerpage.spec.js:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'FirstName' })

```

# Test source

```ts
  1  | import { Basepage } from "./Basepage";
  2  | 
  3  | export class RegisterPage extends Basepage{
  4  | 
  5  |     constructor(page){
  6  |         super(page);
  7  |         this.Registerlink = this.page.getByRole("link",{name:"Register"});
  8  |         this.Gender = this.page.locator("#gender-male");
  9  |         this.Firstname = this.page.getByRole("textbox",{name:"FirstName"});
  10 |         this.Lastname = this.page.getByRole("textbox",{name:"LastName"});
  11 |         this.Email = this.page.getByRole("textbox", {name:"Email"});
  12 |         this.Password = this.page.getByRole("textbox", {name:"Password"});
  13 |         this.ConfirmPass = this.page.getByRole("textbox", {name:"ConfirmPassword"});
  14 | 
  15 |         // click on the Register button
  16 |         this.Registerbtn = this.page.getByRole("textbox", {name:"register-button"});
  17 | 
  18 |     }
  19 | 
  20 |     async RegisterUser(FirstName,LastName,Email,Password,ConfirmPassword){
  21 |         
  22 |         await this.Registerlink.click();
  23 |         await this.Gender.click();
> 24 |         await this.Firstname.fill(FirstName);
     |                              ^ Error: locator.fill: Target page, context or browser has been closed
  25 |         await this.lastname.fill(LastName);
  26 |         await this.Email.fill(Email);
  27 |         await this.Password.fill(Password);
  28 |         await this.confirmpass.fill(ConfirmPassword);
  29 |         
  30 |     }
  31 | }
```