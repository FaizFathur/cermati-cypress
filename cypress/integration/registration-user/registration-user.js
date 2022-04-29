/// <reference types="cypress" />

import {faker} from '@faker-js/faker';

context('Registration User Cermati', () => {
     beforeEach(() => {
        cy.visit('https://www.cermati.com/app/gabung')
     })

    it('Daftar Akun', () => {
        cy.get('#email').type(faker.internet.email())
        cy.get('#mobilePhone').type(faker.phone.phoneNumber('0811########'))
        cy.get('#password').type('P@assw0rd')
        cy.get('#confirmPassword').type('P@assw0rd')
        cy.get('#firstName').type('Cermati')
        cy.get('#lastName').type('QAtest')
        cy.get('#cityAndProvince').type('Jakarta').wait(2000).type('{enter}')
        cy.get('[data-button-name="register-new"]').click()
        // cy.get('div[class*="Confirmation"]').should('be.visible')
        // cy.get('div[class*="Confirmation"]').should('contain', 'Email sudah terdaftar')
        cy.url().should('include', '/app/validate-otp')

    })

    it('Email pernah terdaftar', () => {
        cy.get('#email').type('fathur.ffr@gmail.com')
        cy.get('#mobilePhone').type('0811223344001')
        cy.get('#password').type('P@assw0rd')
        cy.get('#confirmPassword').type('P@assw0rd')
        cy.get('#firstName').type('Cermati')
        cy.get('#lastName').type('QAtest')
        cy.get('#cityAndProvince').type('Jakarta').wait(2000).type('{enter}')
        cy.get('[data-button-name="register-new"]').click()
        cy.get('div[class*="Confirmation"]').should('be.visible')
        cy.get('div[class*="Confirmation"]').should('contain', 'Email sudah terdaftar')

    })
  
    it('No HP sudah terdaftar', () => {
        cy.get('#email').type('cermati.qa@mailnator.com')
        cy.get('#mobilePhone').type('081122334455')
        cy.get('#password').type('P@assw0rd')
        cy.get('#confirmPassword').type('P@assw0rd')
        cy.get('#firstName').type('Cermati')
        cy.get('#lastName').type('QAtest')
        cy.get('#cityAndProvince').type('Jakarta').wait(2000).type('{enter}')
        cy.get('[data-button-name="register-new"]').click()
        cy.get('div[class*="Confirmation"]').should('be.visible')
        cy.get('div[class*="Confirmation"]').should('contain', 'No. Handphone sudah terdaftar')

    })

  })