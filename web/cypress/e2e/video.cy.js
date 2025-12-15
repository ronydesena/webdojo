
describe('Tocar o video', () => {

    it('Deve poder tocar o vídeo de exemplo', () => {
        cy.login()
        cy.contains('Video').click()

        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body') //pegar o conteeúdo da página que contém no iframe
            .then(cy.wrap) //pegar valor de objeto, array ou elemento dentro do html transformando em um elemento cypress
            .as('iFramePlayer') //gravando tudo aqui

        cy.get('@iFramePlayer', {setTimeout: 6000})
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})
