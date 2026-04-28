import { Basepage } from "./Basepage.js";

export class AddressPage extends Basepage {

    constructor(page) {
        super(page);

        this.myAccountLink = this.page.locator(".account").nth(1);
        this.addressLink = this.page.getByRole('link', { name: 'Addresses' }).first();
        this.addAddressBtn = this.page.getByRole("button", { name: "Add new" });
        this.addressPageTitle = this.page.locator(".address-edit-page");
        this.addressFirstName = this.page.getByRole("textbox", { name: "First name:" });
        this.addressLastName = this.page.getByRole("textbox", { name: "Last name:" });
        this.addressEmail = this.page.getByRole("textbox", { name: "Email:" });
        this.addressCompany = this.page.getByRole("textbox", { name: "Company:" });
        this.addressCountry = this.page.getByRole("combobox", { name: "Country:" });
        this.addressCity = this.page.getByRole("textbox", { name: "City:" });
        this.addressAddress1 = this.page.getByRole("textbox", { name: "Address 1:" })
        this.addressAddress2 = this.page.getByRole("textbox", { name: "Address 2:" })
        this.addressZipCode = this.page.getByRole("textbox", { name: "Zip / postal code:" })
        this.addressPhoneNumber = this.page.getByRole("textbox", { name: "Phone number:" })
        this.addressFaxNumber = this.page.getByRole("textbox", { name: "Fax number:" })

        this.addressSaveBtn = this.page.getByRole("button", { name: "Save" });
        this.addressDelete = this.page.getByRole("button", { name: "Delete" }).first();
    }

    async UserAddress(FirstName, LastName, Email, Company, Country, City, Address1, Address2, Zipcode, PhoneNumber, FaxNumber) {

        await this.click(this.myAccountLink);
        await this.page.waitForLoadState('networkidle');
        await this.click(this.addressLink);
        await this.click(this.addAddressBtn);
        await this.waitForVisible(this.addressPageTitle);
        await this.fill(this.addressFirstName, FirstName);
        await this.fill(this.addressLastName, LastName);
        await this.fill(this.addressEmail, Email);
        await this.fill(this.addressCompany, Company);
        await this.select(this.addressCountry, Country);
        await this.fill(this.addressCity, City);
        await this.fill(this.addressAddress1, Address1);
        await this.fill(this.addressAddress2, Address2);
        await this.fill(this.addressZipCode, Zipcode);
        await this.fill(this.addressPhoneNumber, PhoneNumber);
        await this.fill(this.addressFaxNumber, FaxNumber);
        await this.click(this.addressSaveBtn);
        // await this.waitForVisible(this.addressDelete);
        await this.click(this.addressDelete);

        this.page.on("Delete the Addres", async dialog=>{
            await dialog.accept();
        })
    }
}