import {Basepage} from "./Basepage.js";

export class AddToCart extends Basepage{

    constructor(page){
        super(page);

        this.bookslink = this.page.getByRole("link", {name:"Books"}).first();
        this.sortByFilter = this.page.locator("#products-orderby");
        this.bookSelect = this.page.locator(".product-title");
        this.shoppingCartLink = this.page.getByText("Shopping cart");
        this.verifyBooksAddToCart = this.page.getByRole("link", {name:"Computing and Internet"});
        this.removeCartCheckbox = this.page.getByRole("checkbox", {name:"removefromcart"});
        this.updateCartbtn = this.page.getByRole("button", {name:"updatecart"});
        this.checkRemoveCart = this.page.getByText("Your Shopping Cart is empty!");

    }

    
    async AddToCart(){
        await this.click(this.bookslink);
        await this.select(this.sortByFilter, "Name: A to Z");
        await this.bookSelect.filter({has: this.page.getByRole("link",{name:"Computing and Internet"})},{hastText:"Add to cart"});
        await this.click(this.shoppingCartLink);
        await this.waitForVisible(this.verifyBooksAddToCart);
        await this.click(this.removeCartCheckbox);
        await this.click(this.updateCartbtn);
        await this.waitForVisible(this.checkRemoveCart);
    }


}