describe('Reset results', function() {
    it('Does not do much!', function () {
        cy.visit('localhost:3000/results')
        cy.contains('Smazat vyhodnocení').click()
    });
})

describe('Vote for boring 2 times', function() {
    it('Visit page', function(){
        cy.visit('localhost:3000')
        cy.contains('Nuda').click()
        cy.wait(1000)
        cy.contains('Nuda').click()
        
        
    })
})

describe('Check 2 votes for boring option', function(){
    it('checks 2 votes', function () {
        cy.contains("Výsledky").click()
        cy.wait(1000)
        
        /*cy.contains('Výsledek').parent('tr').within(() => {
            cy.get('td').eq(1).contains('Nuda')
            cy.get('td').eq(2).contains('2')
                


        })*/

        cy.get('table').contains('td', 'Nuda').prev().prev().should('contain', '2')
    });
})