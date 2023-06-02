///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import bookTravel from '../pageObjects/bookOnlinePage';

When('the User Search for {string} in Search bar to book online', (India) => {
  bookTravel.search(India);
  cy.contains('Book Online').click()
})

Then('the User should see {string} error message', () => {
  cy.contains('Please select your departure date').should('be.visible');
})

When('the User select date to book online', () => {
  bookTravel.bookOnlineToTravel();
})

Then('the User should see {string} section to verify', (passengersDetails) => {
  bookTravel.passengersDetails(passengersDetails);
})

When('the user select rooms to submit passenger details', () => {
  bookTravel.selectRooms();
})

Then('verify the Confirm Details + Book', () =>{
cy.contains('Confirm Details + Book',{timeout:40000}).should('be.visible');
})

Then('verify the {string} button is enabled',(bookNow)=>{
  cy.get('#terms-accept').click();
  cy.get('#nbf_booknow_button').should('be.enabled').contains(bookNow).click();
})