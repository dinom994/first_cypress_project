/// <reference types="Cypress" />

describe ('My first test suite', function () 
{

    it ('My first test case', function ()
    {

        cy.request ('POST', 'http://216.10.245.166/Library/Addbook.php', {

        "name":"Lear Appium Automation with Java",
        "isbn":"bcdsss",
        "aisle":"22s7",
        "author":"John foe"
        }).then(function(response)
            {
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
            })






    })
})