
import {Basepage} from "./Basepage.js";

export class LoginPage extends Basepage {

    constructor(page) {
        super(page);

        this.loginlink =  this.page.getByRole("link", { name:"Log in" });
        this.username =  this.page.getByRole("textbox", { name: "Email" });
        this.password =  this.page.getByRole("textbox", { name: "Password" });
        this.loginbtn =  this.page.locator(".button-1.login-button");

    }
    
    async login(Email, pass) {

       await this.loginlink.click();
       await this.username.fill(Email);
       await this.password.fill(pass);
       await this.loginbtn.click();
    }

}