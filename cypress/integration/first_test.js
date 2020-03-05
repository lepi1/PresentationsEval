describe('Vote for like', function() {
    it('Visits page', function(){
        cy.visit('localhost:3000')
        cy.get('[data-cy=like]').click()
    })
})

describe('Reset results', function() {
    it('Resets result - clr db', function () {
        cy.visit('localhost:3000/results')
        cy.get('[data-cy=reset]').click()
    });
})

describe('Vote for boring 2 times', function() {
    it('Visits page', function(){
        cy.visit('localhost:3000')
        cy.get('[data-cy=boring]').click()
        cy.wait(1000)
        cy.get('[data-cy=boring]').click()
    })
})

describe('Check 2 votes for boring option', function(){
    it('Checks if table contains 2 votes for boring', function () {
        cy.visit('localhost:3000/results')
        cy.contains("Výsledky").click()
        cy.get('tr').eq(1).should('contain', '2')      
    });
})

