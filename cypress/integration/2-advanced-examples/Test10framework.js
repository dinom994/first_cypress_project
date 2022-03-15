/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe ('My tenth test suite', function () 
{

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })


    it ('My tenth test case', function ()
    {
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage=new HomePage() //kreira objekat za datu klasu
        const productPage=new ProductPage()

cy.visit(Cypress.env('url'))

homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEnterpreneaur().should('be.disabled')

homePage.getShopTab().click()

this.data=this.data.productName // kao rezultat vraca niz productName iz fixtures/example.json i dodjeljuje varijabli this.data
this.data.forEach(function (element) { 
    cy.selectProduct(element)
});

productPage.getProduct().click()
//cy.selectProduct('Blackberry')
var sum=0

cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=> {   //u varijablu $el (koja je niz) smješta elemente koji se nalaze u 4. koloni
const amount=$el.text()
var res=amount.split(" ") //razdvaja tekst na dva dijela teksta razdvojena razmakom, koji se pohranjuju u niz res[0] i res[1]
res=res[1].trim()  //brise nezeljene razmake koji eventualno mogu ostati pohranjeni u novom stringu
sum=Number(sum)+Number(res)
cy.log(res)
}).then(function()   //zato sto je java script asinhroni, tj da nismo stavili resolving promise vrijednost sume bi bila 0
{
cy.log(sum)
})

cy.get('h3 > strong').then(function(element)
{
    const amount=element.text()
    var res=amount.split(" ") //razdvaja tekst na dva dijela teksta razdvojena razmakom, koji se pohranjuju u niz res[0] i res[1]
    var total=res[1].trim()
    total=Number(total)
    expect(total).to.equal(sum)
})

cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('.checkbox').click()
cy.get('.ng-untouched > .btn').click()
cy.get('.alert').then(element=>
{
    const actualText=element.text()
    expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
})




    })
})