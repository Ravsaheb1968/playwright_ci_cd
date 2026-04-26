import { Basepage } from "./Basepage";

export class RegisterPage extends Basepage{

    constructor(page){
        super(page);
        this.Registerlink = this.page.getByRole("link",{name:"Register"});
        this.Gender = this.page.locator("#gender-male");
        this.Firstname = this.page.getByRole("textbox",{name:"FirstName"});
        this.Lastname = this.page.getByRole("textbox",{name:"LastName"});
        this.Email = this.page.getByRole("textbox", {name:"Email"});
        this.Password = this.page.getByRole("textbox", {name:"Password"});
        this.ConfirmPass = this.page.getByRole("textbox", {name:"ConfirmPassword"});

        // click on the Register button
        this.Registerbtn = this.page.getByRole("textbox", {name:"register-button"});

    }

    async RegisterUser(FirstName,LastName,Email,Password,ConfirmPassword){
        
        await this.Registerlink.click();
        await this.Gender.click();
        await this.Firstname.fill(FirstName);
        await this.lastname.fill(LastName);
        await this.Email.fill(Email);
        await this.Password.fill(Password);
        await this.confirmpass.fill(ConfirmPassword);
        
    }
}