/// <reference types="Cypress" />


describe ('My first test suite', function () 
{

    it ('My first test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get ('.product:visible').should('have.length',4)
//parent child chaining

cy.get('.products').as('productLocator')  //u sustini u nastavku koda productLocator=cy.get('.products')
cy.get('@productLocator').find('.product').should('have.length',4)

//od objekata koji su vraceni eq (numeracija pocinje od 0) odabire drugi od njih i komandom click () ''klika'' na string koji se nalazu unutar zagrada komande 'contains'
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
console.log('sf') 
})

//each=provjerava svaki od izbacenih product 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

    const textVeg=$el.find('h4.product-name').text()
if (textVeg.includes('Cashews'))
{
    cy.wrap ($el).find('button').click()
}

})


//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')


//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())

})

const logo=cy.get('.brand')
//cy.get('.brand').text()

//cy.log(logo.text())



    })
}





)