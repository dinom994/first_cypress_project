/// <reference types="Cypress" />


describe ('My sixth test suite', function () 
{

    it ('My sixth test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('.mouse-hover-content').invoke('show') //voditi racuna kod invokea, da u cy.get mora biti parent funkcija, a ne grandparent
cy.contains('Top').click()
cy.url().should('include','top')




    })
})