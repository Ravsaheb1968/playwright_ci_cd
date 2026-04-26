import { Basepage } from "./Basepage";

export class RegisterPage extends Basepage{

    constructor(page){
        super(page);
        this.Registerlink = this.page.getByRole("link",{name:"Register"});
        this.Gender = this.getByLable("Male");
        this.Firstname = this.getByRole("textbox",{name:"FirstName"});
        this.Lastname = this.getByRole("textbox",{name:"LastName"});
        this.Email = this.getByRole("textbox", {name:"Email"});
        this.Password = this.getByRole("textbox", {name:"Password"});
        this.ConfirmPass = this.getByRole("textbox", {name:"ConfirmPassword"});

        // click on the Register button
        this.Registerbtn = this.getByRole("textbox", {name:"register-button"});

    }

    async RegisterUser(gender,firstname,lastname,email,password,confirmpass){
        
        await this.Registerlink.click();
        await this.Gender.click();
        await this.Firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.Email.fill(email);
        await this.Password.fill(password);
        await this.confirmpass.fill(confirmpass);
        
    }
}