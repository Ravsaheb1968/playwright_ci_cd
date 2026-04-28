import { Basepage } from "./Basepage.js";

export class LogoutApp extends Basepage {

    constructor(page) {
        super(page);
        this.logoutlink = this.page.getByRole("link", { name: "Log out" });
    }
    async LogoutApplication() {
        await this.click(this.logoutlink);
    }
}
