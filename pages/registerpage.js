import { Basepage } from "./Basepage";

export class RegisterPage extends Basepage {

    constructor(page) {
        super(page);
        this.Registerlink = this.page.getByRole("link", { name: "Register" });
        this.GenderMale = this.page.locator("#gender-male");
        this.GenderFemale = this.page.locator("#gender-female");
        this.Firstname = this.page.locator("#FirstName");
        this.Lastname = this.page.locator("#LastName");
        this.Email = this.page.locator("#Email");
        this.Password = this.page.locator("#Password");
        this.ConfirmPass = this.page.locator("#ConfirmPassword");

        // click on the Register button
        this.Registerbtn = this.page.locator("#register-button");

    }

    async RegisterUser(Gender, FirstName, LastName, Email, Password, ConfirmPassword) {

        await this.click(this.Registerlink);

        if (Gender === "Male") {
            await this.click(this.GenderMale);
        }
        else {
            await this.click(this.GenderFemale);
        }

        await this.fill(this.Firstname, FirstName);
        await this.fill(this.Lastname, LastName);
        await this.fill(this.Email, Email);
        await this.fill(this.Password, Password);
        await this.fill(this.ConfirmPass, ConfirmPassword);
        await this.click(this.Registerbtn);

        // await this.Registerlink.click();
        // await this.Gender.click();
        // await this.Firstname.fill(FirstName);
        // await this.Lastname.fill(LastName);
        // await this.Email.fill(Email);
        // await this.Password.fill(Password);
        // await this.ConfirmPass.fill(ConfirmPassword);

    }
}