/// <reference types="Cypress" />


describe ('My fourth test suite', function () 
{

    it ('My fourth test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/");

//Alerts(pop ups) in web Apps
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert 
cy.on('window:alert', (str)=>
{
expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//window:confirm
cy.on('window:confirm', (str)=>
{
expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//Child tabs
cy.get('#opentab').invoke('removeAttr','target').click()
//Navigating browser controls using Cypress
cy.url().should('include','rahulshettyacademy.com/#/index') //provjerava da li je string ukljucen (include) u url
cy.go('back')

//WEB TABLES (provjeravamo u tabeli da li je cijena kursa ''Master Selenium Automation in Simple Python Language'' 25)








    })
})