/// <reference types="Cypress" />


describe ('My second test suite', function () 
{

    it ('My second test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)

//parent child chaining

cy.get('.products').as('productLocator')  //u sustini u nastavku koda productLocator=cy.get('.products')
//each=provjerava svaki od izbacenih product 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const textVeg=$el.find('h4.product-name').text()
if (textVeg.includes('Cashews'))
{
    cy.wrap ($el).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()





    })
}





)