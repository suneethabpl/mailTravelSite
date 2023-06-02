class HomePage {
    
    visitToHome() {
        cy.visit(Cypress.env('baseUrl'));
    }

    verifyMailtravel(title) {
        cy.title().should('include', title)
    }
    
    acceptCookie(){
        cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click();
    }
}

const homepage = new HomePage();

export default homepage;