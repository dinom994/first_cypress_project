/// <reference types="Cypress" />


describe ('My third test suite', function () 
{

    it ('My third test case', function ()
    {
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/");

//checkboxes
cy.get ('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3']) //input[type="checkbox"] postavlja css locator na sve chekboxove

//static dropdowns
cy.get('select').select('option2').should('have.value','option2')


//dynamic dropdowns
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list)=> {    //each-prolazi kroz svaku od izbacenih opcija

    if($el.text()=='India')
    {
        $el.click()
    }

})

cy.get('#autocomplete').should('have.value','India')

//visible and invisible elements
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio buttons
cy.get('[value="radio2"]').check().should('be.checked')



    })
})