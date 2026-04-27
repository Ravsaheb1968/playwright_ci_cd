
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

        // Here is this used manadatory to access the varible of the Loginpag class itself 
        // without using this not able to find the or its undefined variable.
       await this.click(this.loginlink);
       await this.fill(this.username,Email);
       await this.fill(this.password, pass);
       await this.click(this.loginbtn);
    }

}