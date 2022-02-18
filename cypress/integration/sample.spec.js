
describe('01', ()=> {
  it("visit all the dogs", ()=> {
    cy.visit('home.html')
    cy.contains('you pet the dog?')
    // cy.pause()

    cy.contains('YES').click();
    // cy.pause()

    cy.get('.btn-yes').click();
    // cy.pause()

    cy.get('.no').click();
    // cy.pause()

    cy.get('.btn-no').click();

    })

describe('02', ()=>{
  it("read the title", ()=> {
    cy.visit('home.html')
    cy.contains('Can you pet the dog?')
    cy.get('title')
    cy.end()
  })
})
  
  })