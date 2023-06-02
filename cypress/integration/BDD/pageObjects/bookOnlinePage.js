class bookOnline {

    search(India) {
        cy.get("#searchtext_freetext_search_form").type('India')
        cy.get('#as_ul > :nth-child(1) > a > :nth-child(3)').contains(India).scrollIntoView().click();
    }

    bookOnlineToTravel(){
        cy.contains('Dates & Prices').click();
        cy.contains('12').should('be.visible').click();
        cy.contains('Departure Airport:').scrollIntoView().should('be.visible');
        cy.get('#tour-price').find('span').contains('£4,198').should('be.visible');
        cy.get('#book-button').contains('Book Online').click();
    }

    passengersDetails(passengersDetails) {
        cy.get('h2').contains(passengersDetails).should('be.visible').click();
        cy.get(':nth-child(3) > h3').contains('Passengers')
        cy.get(':nth-child(4) > h3').contains('Departing from').should('have.text', 'Departing from');
        cy.get('select').eq(0).select('1');
    }

    selectRooms(){
        cy.contains('Select your room and continue').click();
        cy.fixture('passengerDetails.json').then((user) => {
          cy.get('select[name="pax-a-title-1"]').select('Mr');
          cy.get('#pax-a-first-1').focus().type(user.Adult1FirstName);
          cy.get('#pax-a-last-1').type(user.Adult1LastNmae);
          cy.get('select[name="pax-a-dobd-1"]').select('10');
          cy.get('select[name="pax-a-dobm-1"]').select('October');
          cy.get('select[name="pax-a-doby-1"]').select('1989');
          cy.get('select[name="pax-a-title-2"]').select('Mr');
          cy.get('#pax-a-first-2').type(user.Adult2FirstName);
          cy.get('#pax-a-last-2').type(user.Adult2LastNmae);
          cy.get('select[name="pax-a-dobd-2"]').select('12');
          cy.get('select[name="pax-a-dobm-2"]').select('December');
          cy.get('select[name="pax-a-doby-2"]').select('1990');
          cy.get('#contact-name').type(user.yourName);
          cy.get('#contact-mobile').type(user.MobilePhoneNumber);
          cy.get('#contact-email').type(user.EmailAddress);
          cy.get('#contact-address1').type(user.AddressLine1);
          cy.get('#contact-address2').type(user.AddressLine2);
          cy.get('#contact-city').type(user.City);
          cy.get('#contact-postcode').type(user.Postcode);
          cy.get('select[id="contact-country"]').select('India');
          cy.get('select[id="contact-hearabout"]').select('Email');
          cy.contains('Continue').click();
    })
}

}

const bookTravel = new bookOnline();

export default bookTravel;