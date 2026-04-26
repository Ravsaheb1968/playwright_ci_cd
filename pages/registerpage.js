import { Basepage } from "./Basepage";

export class RegisterPage extends Basepage{

    constructor(page){
        super(page);
        this.Registerlink = this.page.getByRole("link",{name:"Register"});
        this.Gender = this.page.locator("#gender-male");
        this.Firstname = this.page.locator("#FirstName");
        this.Lastname = this.page.locator("#LastName");
        this.Email = this.page.locator("#Email");
        this.Password = this.page.locator("#Password");
        this.ConfirmPass = this.page.locator("#ConfirmPassword");

        // click on the Register button
        this.Registerbtn = this.page.getByRole("textbox", {name:"register-button"});

    }

    async RegisterUser(Gender,FirstName,LastName,Email,Password,ConfirmPassword){
        
        await this.Registerlink.click();
        await this.Gender.click();
        await this.Firstname.fill(FirstName);
        await this.Lastname.fill(LastName);
        await this.Email.fill(Email);
        await this.Password.fill(Password);
        await this.ConfirmPass.fill(ConfirmPassword);
        
    }
}