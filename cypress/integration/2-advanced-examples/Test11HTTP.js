/// <reference types="Cypress" />


describe ('My first test suite', function () 
{

    it ('My first test case', function ()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       
        
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        }, 
        {
            statusCode : 200,
            body : [{"book_name":"RestAssured with Java","isbn":"RSU","aisle":"2301"}]
        }).as('bookretrievals')
        
        
        cy.get('.btn.btn-primary').click()    
        cy.wait('@bookretrievals').should(({request,response})=>
        {
cy.get('tr').should('have.length',response.body.length+1) //zbog headera +1

        }) //cekamo dok cypress intercepts response
        cy.get('p').should('have.text','Oops only 1 Book available')

        //length of the response array = rows of the table




})

})