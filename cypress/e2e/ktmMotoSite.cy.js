describe('App click menu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads', () => {
    cy.visit('/')
  })

  it('click menu', () => {
    cy.get('[href="/naked"]').click()
    cy.contains('KTM 1290 SUPER DUKE R 2022').click()
    cy.contains('Вернуться назад').click()
    cy.contains('KTM 125 Duke 2022').click()
    cy.contains('Заказать').click()
    cy.contains('x').click()
    cy.contains('Заказать').click()
  })
})

describe('test order form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[href="/naked"]').click()
    cy.contains('KTM 125 Duke 2022').click()
    cy.contains('Заказать').click()
  })

  it('url adress-name test', () => {
    cy.url().should('include', '/naked/ktm-125-duke-2022/order')
  })

  it('form name, phone, email, comment tests', () => {
    cy.get('[data-testid="send"]').should('have.attr', 'disabled')

    cy.get('[data-testid="userName"]').type('z').should('have.value', 'z')
    cy.get('span').contains('Минимум 2 символа')
    cy.get('[data-testid="userName"]').clear().type('Alexander')

    cy.get('[data-testid="phone"]').type('z').should('have.value', 'z')
    cy.get('span').contains('Минимум 7 символа')
    cy.get('[data-testid="phone"]')
      .clear()
      .type('zdddddd')
      .should('have.value', 'zdddddd')
    cy.get('span').contains('Введите корректный номер телефона')
    cy.get('[data-testid="phone"]').clear().type('+375295113322')

    cy.get('[data-testid="email"]').type('email').should('have.value', 'email')
    cy.get('span').contains('Введите корректный email')
    cy.get('[data-testid="email"]').clear().type('email@gmail')
    cy.get('span').contains('Введите корректный email')
    cy.get('[data-testid="email"]').clear().type('email@gmail.com')

    cy.get('[data-testid="send"]').should('not.have.attr', 'disabled')

    cy.get('[data-testid="message"]')
      .clear()
      .type('Привезите как можно скорее!!!')
      .should('have.value', 'Привезите как можно скорее!!!')

    cy.get('[data-testid="send"]').click()
    cy.contains('Ваша заявка отпралена')
    cy.contains('Вернуться назад').click()
    cy.contains('KTM 125 Duke 2022')
  })
})
