/// <reference types="Cypress" />


describe ('My seventh test suite', function () 
{

    it ('My seventh test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#opentab').then(function(el){
const url=el.prop('href')
cy.log(url)
cy.visit(url)
})




    })
})