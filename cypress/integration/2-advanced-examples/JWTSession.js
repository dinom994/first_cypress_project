/// <reference types="Cypress" />

describe ('JWT Session', ()=> 
{

    it ('is logged in through local storage', ()=>
    {

      cy.LoginAPI().then(()=>{   
          cy.visit("https://rahulshettyacademy.com/client",
          {
              onBeforeLoad: function(window)
              {
                  window.localStorage.setItem('token',Cypress.env('token'))
              }
          }) //logika je u tome da se prije otvaranja stranice (onBeforeLoad) u local storage smjesti token
      })  

      cy.get('.card-body button:last-of-type').eq(1).click() //drugi produkt dodaje u kasu
      cy.get("[routerlink*='cart']").click()
      cy.contains("Checkout").click()
      cy.get("[placeholder*='Country']").type("ind")
      //cy.get('#opentab').invoke('removeAttr','target').click()
      cy.get('.ta-item').each(($el, index, $list) => {
          if($el.text()===" India")
            {
                cy.wrap($el).click()
            }
      })
      cy.get('.action__submit').click()
      cy.wait(2000)
      cy.get('.order-summary button').click()
    })
})