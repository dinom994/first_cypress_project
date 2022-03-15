/// <reference types="Cypress" />

describe ('My fifth test suite', function () 
{

    it ('My fifth test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/");

//WEB TABLES (provjeravamo u tabeli da li je cijena kursa ''Master Selenium Automation in Simple Python Language'' 25)
cy.get('tr td:nth-child(2)').each(($el, index, $list)=> {
    const text=$el.text()
    if(text.includes("Python"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){//pomjeramo se sa zeljenog elementa na njegovog sljedeceg ''siblinga''
                const priceText=price.text()
                expect (priceText).to.equal('25')
            }) 
        }

})




    })
})