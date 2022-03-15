/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe ('My eighth test suite', function () 
{

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })


    it ('My eighth test case', function ()
    {
cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
cy.get('select').select(this.data.gender)
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
cy.get('#inlineRadio3').should('be.disabled')

cy.get(':nth-child(2) > .nav-link').click()

this.data=this.data.productName // kao rezultat vraca niz productName iz fixtures/example.json i dodjeljuje varijabli this.data
this.data.forEach(function (element) { 
    cy.selectProduct(element)
});

//cy.selectProduct('Blackberry')






    })
})