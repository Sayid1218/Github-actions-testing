export class HomePage {
    constructor(page){
        this.page = page;
        this.Url = 'https://www.bankasia-bd.com/';
        this.ClosePopUpButton = page.locator("(//button[@type='button'][normalize-space()='×'])[2]");
        
    }


     async navigateToLoginPage() {
        await this.page.goto(this.Url);
    }
    
}