/// <reference types="Cypress" />


describe ('My first test suite', function () 
{

    it ('My first test case', function ()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       
        
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',  //request
        (req)=> //svi requesti koje smo zadali se sada nalaze u objektu req
    {
       req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"  //u req objektu modifikujemo prvobitni url sa novim
       req.continue((res)=>{
           // expect(res.statusCode).to.equal(403)
       })        //req se salje serveru, a njegov odgovor se sprema u objekat res
    }).as("dummyUrl")

cy.get('.btn.btn-primary').click()  
cy.wait('@dummyUrl')  //nakon klikanja na button ceka se da se izvrsi intercept koji smo definisali kao dummyUrl i onda otvara nova str



})

})