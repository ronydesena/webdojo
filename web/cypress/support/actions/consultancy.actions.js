Cypress.Commands.add('fillConsultancyForm', (form) => {

    cy.get('input[placeholder="Digite seu nome completo"]').type(form.name)
    cy.get('input[type="email"]').type(form.email)
    cy.get('#phone').type(form.phone).should('have.value', '(84) 99102-3625')

    cy.contains('label', 'Tipo de Consultoria')
        .parent() //ir para o elemento pai
        .find('select') //buscando o filho
        .select(form.consultancyType)

    if (form.personType === 'cpf') {
        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('span', 'Pessoa Jurídica')
            .parent()
            .find('input')
            .should('be.not.checked')

        cy.get('#document')
            .type(form.document)
    }

    if (form.personType === 'cnpj') {
        cy.contains('span', 'Pessoa Jurídica')
            .parent()
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .should('be.not.checked')

        cy.get('#document')
            .type(form.document)
    }


    cy.contains('label', 'Instagram')
        .parent() //ir para o elemento pai
        .find('input') //buscando o filho
        .check()
        .should('be.checked')

    cy.contains('label', 'Instagram')
        .parent() //ir para o elemento pai
        .find('input') //buscando o filho
        .check()
        .should('be.checked')

    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .parent() //ir para o elemento pai
            .find('input') //buscando o filho
            .check()
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


    form.techs.forEach((tech) => {
        cy.get('#technologies')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })

    if (form.terms === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validadeConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})