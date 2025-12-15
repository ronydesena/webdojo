import {getTodayFormatted} from "../support/utils"

describe('Login', () => { ///Agrupa um conjunto de testes

  it.only('Deve logar com sucesso', () => { //função que implementa um teste
    cy.start()
    cy.submetLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

      cy.getCookie('login_date').should((cookie) => {
        expect(cookie.value).to.eq(getTodayFormatted())
      })

      cy.window().then((win) => {
        const token = win.localStorage.getItem('token')
        expect(token).to.match(/^[a-fA-F0-9]{32}$/)
      })

  })

  it('Não deve logar com senha inválida', () => { //função que implementa um teste
    cy.start()
    cy.submetLoginForm('papito@webdojo.com', 'katana321')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

  it('Não deve logar com email não cadastrado', () => { //função que implementa um teste
    cy.start()
    cy.submetLoginForm('404@webdojo.com', 'katana123')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})

