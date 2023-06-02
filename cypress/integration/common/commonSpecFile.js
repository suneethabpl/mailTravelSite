///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDD/pageObjects/homepage'

Given("the User visits to {string} page", (home) => {
    homepage.visitToHome(home);
})

Given("confirm the page title has {string}", (title) => {
    homepage.verifyMailtravel(title)
})

Given("accept All cookies", (cookie) => {
    homepage.acceptCookie(cookie)
})